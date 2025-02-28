// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Events = () => {
//   const [eventsThisWeek, setEventsThisWeek] = useState([]);
//   const navigate = useNavigate();
//   const [eventMode, setEventMode] = useState();

//   const eventsData =[
//     {id:1, title:"werty", date:"esrdtfu" , description:"ertyui", type:"Inperson", venue: "Delhi"},
//     {id:2, title:"vb" , date:"esrdtfu" , description:"ertyui", type:"Virtual" },
//     {id:3, title:"dfgh" , date:"esrdtfu" , description:"ertyui", type:"Inperson", venue:"Hydrabad" },
//     {id:4, title:"sdfghj" , date:"esrdtfu" , description:"ertyui", type:"Virtual"},
//     {id:5, title:"xcvb" , date:"esrdtfu" , description:"ertyui", type:"Inperson", venue: "Mumbai"},
//     {id:6, title:"dfgh" , date:"esrdtfu" , description:"ertyui", type:"Virtual"},
//     {id:7, title:"iuyt" , date:"esrdtfu" , description:"ertyui", type:"Inperson", venue: "Pune"}
//   ];




  // useEffect(() => {
  //   axios
  //     .get("/api/events")
  //     .then((res) => {
  //       const filteredEvents = res.data.filter(isThisWeek);
  //       setEventsThisWeek(filteredEvents);
  //     })
  //     .catch((err) => console.error("Error fetching events", err));
  // }, []);




//   const isThisWeek = (event) => {
//     const eventDate = new Date(event.date);
//     const today = new Date();
//     const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Start of week
//     const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // End of week

//     return eventDate >= startOfWeek && eventDate <= endOfWeek;
//   };

//   return (
//     <>
//       <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Upcoming Events This Week</h1>
//       {eventsThisWeek.length === 0 ? (
//         <p className="text-gray-500">No events scheduled for this week.</p>
//       ) : (
//       <div className="space-y-6">
//         {eventsData.map((event) => (
//           <div
//             key={event.id}
//             className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <div className="flex justify-between">
//               <h2 className="text-xl font-semibold">{event.title}</h2>
//               <span className="px-2 py-1 text-sm font-medium rounded-lg bg-blue-100 text-blue-800">
//                 {new Date(event.date).toLocaleDateString("en-US", {
//                   weekday: "long",
//                   month: "short",
//                   day: "numeric",
//                 })}
//               </span>
//             </div>
//             <p className="text-sm text-gray-500 mt-1">{event.date}</p>
//             <p className="mt-2 text-gray-700">{event.description}</p>
//             {event.venue && (
//               <p className="mt-1 text-sm text-gray-500">Venue: {event.venue}</p>
//             )}

//               <span
//                 className={`mt-2 inline-block px-3 py-1 text-sm font-semibold rounded-lg ${
//                   event.venue ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {event.venue ? "In-Person" : "Virtual"}
//               </span>
//           </div>
//         ))}
//       </div>)}
//     </div>
//     </>
//   );
// };

// export default Events;




import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [eventsThisWeek, setEventsThisWeek] = useState([]);
  const navigate = useNavigate();

  const eventsData = [
    { id: 1, title: "werty", date: "2025-02-03", description: "Event 1", type: "Inperson", venue: "Delhi" },
    { id: 2, title: "vb", date: "2025-02-04", description: "Event 2", type: "Virtual" },
    { id: 3, title: "dfgh", date: "2025-02-08", description: "Event 3", type: "Inperson", venue: "Hyderabad" },
    { id: 4, title: "sdfghj", date: "2025-02-06", description: "Event 4", type: "Virtual" },
    { id: 5, title: "xcvb", date: "2025-02-01", description: "Event 5", type: "Inperson", venue: "Mumbai" },
    { id: 6, title: "dfgh", date: "2025-02-05", description: "Event 6", type: "Virtual" },
    { id: 7, title: "iuyt", date: "2025-02-03", description: "Event 7", type: "Inperson", venue: "Pune" }
  ];

  useEffect(() => {
    const filteredEvents = eventsData.filter(isThisWeek);
    setEventsThisWeek(filteredEvents);
  }, []);

  // Helper function to check if an event is in the current week
  const isThisWeek = (event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Start of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // End of the week (Saturday)

    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events This Week</h1>
      {eventsThisWeek.length === 0 ? (
        <p className="text-gray-500">No events scheduled for this week.</p>
      ) : (
        <div className="space-y-6">
          {eventsThisWeek.map((event) => (
            <div
              key={event.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                <span className="px-2 py-1 text-sm font-medium rounded-lg bg-blue-100 text-blue-800">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{event.description}</p>
              {event.venue && (
                <p className="mt-1 text-sm text-gray-500">Venue: {event.venue}</p>
              )}
              <span
                className={`mt-2 inline-block px-3 py-1 text-sm font-semibold rounded-lg ${
                  event.venue ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {event.venue ? "In-Person" : "Virtual"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;