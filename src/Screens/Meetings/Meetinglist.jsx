import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotMonth,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";

const Calendar = () => {
  const [view, setView] = useState("Week");
  const [startDate, setStartDate] = useState(DayPilot.Date.today());
  const [events, setEvents] = useState([]);
  const [dayView, setDayView] = useState(null);
  const [weekView, setWeekView] = useState(null);
  const [monthView, setMonthView] = useState(null);

  const fetchMeetings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/meetings");

      const formatted = res.data.meetings.map((meeting) => {
        const startDateTime = `${meeting.date}T${meeting.startTime}:00`;
        const endDateTime = `${meeting.date}T${meeting.endTime}:00`;

        return {
          id: meeting._id,
          text: meeting.title,
          start: new DayPilot.Date(startDateTime),
          end: new DayPilot.Date(endDateTime),
          backColor: meeting.color || "#6fa8dc",
        };
      });

      setEvents(formatted);
    } catch (err) {
      console.error("Error fetching meetings:", err);
    }
  };

  const onTimeRangeSelected = async (args) => {
    const dp = args.control;
    const modal = await DayPilot.Modal.prompt(
      "Create a new meeting:",
      "New Meeting"
    );
    dp.clearSelection();
    if (modal.canceled) return;

    const newEvent = {
      title: modal.result,
      startTime: args.start.toString(),
      endTime: args.end.toString(),
      color: "#93c47d",
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/meetings",
        newEvent
      );
      setEvents((prev) => [
        ...prev,
        {
          id: res.data._id,
          text: res.data.title,
          start: new DayPilot.Date(res.data.startTime),
          end: new DayPilot.Date(res.data.endTime),
          backColor: res.data.color,
        },
      ]);
    } catch (err) {
      console.error("Error creating meeting:", err);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const upcomingMeetings = events
    .filter((ev) => new DayPilot.Date(ev.end) >= DayPilot.Date.today()) // future or ongoing meetings
    .sort((a, b) => a.start.value - b.start.value) // earliest first
    .slice(0, 3); // take only next three

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 flex flex-col gap-6">
        <div className="bg-[#032845] rounded-2xl shadow px-20 py-5">
          <DayPilotNavigator
            selectMode={view}
            showMonths={1}
            skipMonths={1}
            onTimeRangeSelected={(args) => setStartDate(args.day)}
            events={events}
            style={{ width: "500px" }}
          />
        </div>
        <div className="bg-[#032845] rounded-2xl shadow p-5 text-justify ">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 text-white">
            Upcoming Meetings
          </h3>
          {upcomingMeetings.length === 0 ? (
            <p className="text-gray-500">No upcoming meetings</p>
          ) : (
            <ul className="space-y-3 bg-white rounded-sm">
              {upcomingMeetings.map((meeting) => (
                <li
                  key={meeting.id}
                  className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <strong className="block text-gray-900 ">
                    {meeting.text}
                  </strong>
                  <span className="text-sm text-gray-500">
                    {meeting.start.toString("dddd, MMMM d, h:mm tt")} -{" "}
                    {meeting.end.toString("h:mm tt")}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      {/* Main Calendar */}
      <main className="flex-1 bg-white rounded-2xl shadow p-5">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <div className="flex flex-wrap gap-2">
            {["Day", "Week", "Month"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  view === v
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStartDate(DayPilot.Date.today())}
            className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition"
          >
            Today
          </button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <DayPilotCalendar
            viewType={"Day"}
            startDate={startDate}
            events={events}
            visible={view === "Day"}
            durationBarVisible={false}
            onTimeRangeSelected={onTimeRangeSelected}
            controlRef={setDayView}
          />
          <DayPilotCalendar
            viewType={"Week"}
            startDate={startDate}
            events={events}
            visible={view === "Week"}
            durationBarVisible={false}
            onTimeRangeSelected={onTimeRangeSelected}
            controlRef={setWeekView}
          />
          <DayPilotMonth
            startDate={startDate}
            events={events}
            visible={view === "Month"}
            eventBarVisible={false}
            onTimeRangeSelected={onTimeRangeSelected}
            controlRef={setMonthView}
          />
        </div>
      </main>
    </div>
  );
};

export default Calendar;
