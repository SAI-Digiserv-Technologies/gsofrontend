import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import bottomImg from "../../assets/Images/Daily Reflection.png";
import daily from "../../assets/Images/Daily Reflection-image.png";
function DailyReflection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reflections, setReflections] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReflection = async () => {
      try {
        const dateString = selectedDate.toISOString().split("T")[0];
        const res = await fetch(
          `http://localhost:5000/api/daily-reflections/${dateString}`
        );
        const data = await res.json();
        if (data) {
          setReflections((prev) => ({
            ...prev,
            [data.date]: {
              caption: data.caption || "",
              title: data.title || "",
              subTitle: data.subTitle || "",
              content: data.content || "",
              tags: data.tags || [],
            },
          }));
        }
      } catch (error) {
        console.error("Error fetching reflection:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReflection();
  }, [selectedDate]);

  const today = new Date().toISOString().split("T")[0];
  const selectedDateString = selectedDate.toISOString().split("T")[0];

  const reflection = reflections[selectedDateString] ||
    reflections[today] || {
      caption: "No caption",
      title: "No reflection available",
      subTitle: "",
      content: "No content found for today.",
      tags: [],
      mood: "",
      productivity: "",
    };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      direction === "prev"
        ? newDate.setMonth(newDate.getMonth() - 1)
        : newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDateClick = (date) => setSelectedDate(date);
  const isToday = (date) => date.toDateString() === new Date().toDateString();
  const isSelected = (date) =>
    date.toDateString() === selectedDate.toDateString();
  const days = getDaysInMonth(currentDate);

  if (loading)
    return <p className="text-center p-10">Loading reflections...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-900 f4">
              தினமும் நம் சிந்தனைக்கு
            </h1>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify f6">
              <p className="text-xl font-semibold text-red-800">
                {reflection.caption}
              </p>
              <p className="text-lg font-bold">{reflection.content}</p>

              <p className="text-md italic f4">{reflection.subTitle}</p>
              <p className="text-xl">{reflection.title}</p>
              {reflection.tags?.length > 0 && (
                <p className="text-sm text-gray-500">
                  Tags: {reflection.tags.join(", ")}
                </p>
              )}
              {reflection.mood && (
                <p className="text-sm">Mood: {reflection.mood}</p>
              )}
              {reflection.productivity && (
                <p className="text-sm">
                  Productivity: {reflection.productivity}/10
                </p>
              )}
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:w-1/2 w-full flex flex-col items-center">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 w-full max-w-md">
              <div className="text-center mb-4">
                <h3 className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide">
                  SOBRIETY IS A JOURNEY, <br /> NOT A DESTINATION.
                </h3>
              </div>

              <div className="bg-blue-900 rounded-xl p-3 sm:p-4 text-white w-full">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-2 sm:mb-4">
                  <button
                    onClick={() => navigateMonth("prev")}
                    className="p-1 hover:bg-blue-800 rounded"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </h4>
                  <button
                    onClick={() => navigateMonth("next")}
                    className="p-1 hover:bg-blue-800 rounded"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-1 sm:mb-2">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="text-[10px] sm:text-xs text-center py-1 text-blue-200 font-medium"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((date, idx) => (
                    <div key={idx} className="aspect-square">
                      {date ? (
                        <button
                          onClick={() => handleDateClick(date)}
                          className={`w-full h-full flex items-center justify-center text-sm rounded-lg transition-colors
                            ${
                              isSelected(date)
                                ? "bg-blue-500 text-white font-bold"
                                : isToday(date)
                                ? "bg-blue-600 text-white font-semibold"
                                : "hover:bg-blue-800 text-white"
                            }`}
                        >
                          {date.getDate()}
                        </button>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="w-full">
        <img
          src={daily}
          alt="reflection decoration"
          className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-610px] object-cover"
        />
      </div>
    </div>
  );
}

export default DailyReflection;
