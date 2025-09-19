// import React from "react";
// import { CheckCircle, XCircle } from "lucide-react";

// const DosAndDonts = () => {
//   const dos = [
//     "Attend Closed AA Meetings only if you're an alcoholic or think you may have a drinking problem.",
//     "Attend Open AA Meetings if you're a non-alcoholic and want to support or learn.",
//     "Listen and share personal experiences to support others in recovery.",
//     "Follow the 12 Steps to build a healthy, alcohol-free lifestyle.",
//     "Seek help from members who offer guidance or sponsorship.",
//     "Respect others' stories and privacy shared during meetings.",
//   ];

//   const donts = [
//     "Make medical or psychiatric diagnosis or prognoses or offer advice.",
//     "Provide drying out or nursing service, hospitalization, drugs, housing, jobs, money, or other welfare services.",
//     "Accept any money for its services or contributions from outside sources.",
//     "Provide letter of reference to parole boards, lawyers, court officials, social agencies, employers, etc.",
//     "Engage in or support education, research or professional treatment.",
//   ];

//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold mb-10">
//           What we <span className="text-[#adff77]">Do</span> &{" "}
//           <span className="text-red-600">Don’t</span> :
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-white rounded-lg shadow border-[#adff77]">
//             <h3 className="bg-[#adff77] text-white text-xl font-bold py-3 px-4 rounded-t text-center">
//               Do’s
//             </h3>
//             <ul className="space-y-4 p-6">
//               {dos.map((item, index) => (
//                 <li key={index} className="flex items-start gap-3 text-justify">
//                   <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
//                   <p className="text-gray-700">{item}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white rounded-lg shadow border-red-500">
//             <h3 className="bg-red-500 text-white text-xl font-bold py-3 px-4 rounded-t">
//               Don’t’s
//             </h3>
//             <ul className="space-y-4 p-6">
//               {donts.map((item, index) => (
//                 <li key={index} className="flex items-start gap-3 text-justify">
//                   <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
//                   <p className="text-gray-700">{item}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DosAndDonts;
