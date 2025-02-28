import React from 'react'
import { useRef } from "react";
import { MapPin, Star } from 'lucide-react';

const RecommendationDoctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Parv Goyal", medical: "Neurologist", rating:4.9, location:"Mumbai" },
    { id: 2, name: "Dr. Nishad Malhotra", medical: "Physiologist", rating:4.2, location:"Pune" },
    { id: 3, name: "Dr. Anuj Kumar", medical: "Oncologist", rating:4.8, location:"Hydrabad" },
    { id: 4, name: "Dr. Sharad Gupta", medical: "Cardiologist", rating:5, location:"Delhi" },
    { id: 5, name: "Dr. Rajiv Jain", medical: "Orthopedic", rating:4.2, location:"Jalandhar" },
    { id: 6, name: "Dr. Anu Garg", medical: "Dermatologist", rating:4.6, location:"Dallas" },
    { id: 7, name: "Dr. Vedansh Sachdeva", medical: "Pulmnologist", rating:4.9, location:"Chandigarh" },
    { id: 8, name: "Dr. Vasu Singla", medical: "Opthalmologist", rating:4.7, location:"Patiala" },
    { id: 9, name: "Dr. Varun Mittal", medical: "Gynecologist", rating:4.9, location:"panchkula" },
    { id: 10, name: "Dr. Jagdish Goyal", medical: "Physician", rating:4.8, location:"Kerela" }
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full relative">

      
      {/* Scroll buttons */}
      <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-md">
        ◀
      </button>
      <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-md">
        ▶
      </button>

      {/* Horizontal Scrolling Container */}
      <div ref={scrollRef} className="flex overflow-x-auto space-x-6 scrollbar-hide p-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="min-w-[350px] h-[200px] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h4 className="text-xl font-semibold">{doctor.name}</h4>
            <p className="text-gray-600">{doctor.medical} members</p>
            <div className='text-gray-600 flex items-center'>
                <Star className='size-5 mr-1 text-yellow-500'/>
                {doctor.rating}
                </div>
            <div className='font-medium flex items-center mt-2 text-gray-500'>
                <MapPin/>
                {doctor.location}
            </div>

            <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            {/* <Link to={`/doctorsProfile/${doctor.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            View Profile
            </Link> */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationDoctors;
