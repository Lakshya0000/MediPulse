import React, { useState, useEffect } from "react";

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const eventsData = [
    { id: 1, title: "werty", date: "2025-02-03", description: "Event 1", type: "Inperson", venue: "Delhi" },
    { id: 2, title: "vb", date: "2025-02-04", description: "Event 2", type: "Virtual" },
    { id: 3, title: "dfgh", date: "2025-02-08", description: "Event 3", type: "Inperson", venue: "Hyderabad" },
    { id: 4, title: "sdfghj", date: "2025-02-06", description: "Event 4", type: "Virtual" },
    { id: 5, title: "xcvb", date: "2025-02-01", description: "Event 5", type: "Inperson", venue: "Mumbai" },
    { id: 6, title: "dfgh", date: "2025-02-05", description: "Event 6", type: "Virtual" },
    { id: 7, title: "iuyt", date: "2025-02-03", description: "Event 7", type: "Inperson", venue: "Pune" },
  ];

  useEffect(() => {
    const today = new Date();
    const past = eventsData.filter((event) => new Date(event.date) < today);
    const upcoming = eventsData.filter((event) => new Date(event.date) >= today);

    setPastEvents(past);
    setUpcomingEvents(upcoming);
  }, []);

  const EventCard = ({ event }) => (
    <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Past Events */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Past Events</h2>
          {pastEvents.length === 0 ? (
            <p className="text-gray-500">No past events.</p>
          ) : (
            <div className="space-y-6 bg-gray-100">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {upcomingEvents.length === 0 ? (
            <p className="text-gray-500">No upcoming events.</p>
          ) : (
            <div className="space-y-6 ">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default PastEvents;