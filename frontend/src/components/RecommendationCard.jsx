// import React from 'react'

// const RecommendationCard = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default RecommendationCard

// import { useState, useEffect } from "react";
// import axios from "axios";

// const RecommendedCommunities = () => {
//   const [communities, setCommunities] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/communities")
//       .then((res) => setCommunities(res.data))
//       .catch((err) => console.error("Error fetching communities", err));
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-full">
//       <h3 className="text-md font-semibold mb-3">Recommended Communities</h3>
//       <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-2">
//         {communities.map((community) => (
//           <div key={community.id} className="min-w-[250px] bg-gray-100 p-4 rounded-lg shadow-md">
//             <h4 className="font-semibold">{community.name}</h4>
//             <p className="text-gray-500">{community.members} members</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg">
//               Join Community
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedCommunities;

// import React from 'react'

// const RecommendedCommunities = () => {
//   const communities = [
//     { id: 1, name: "Adaptive Sports & Recreation", members: "1.2k" },
//     { id: 2, name: "Mobility Support Network", members: "956" },
//     { id: 3, name: "Wellness Workshop", members: "750" },
//     { id: 4, name: "Chronic Pain Management", members: "1.5k" },
//     { id: 5, name: "Mental Health Awareness", members: "1.1k" }
//   ];

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-full">
//       <h3 className="text-md font-semibold mb-3">Recommended Communities</h3>
//       <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-2">
//         {communities.map((community) => (
//           <div key={community.id} className="min-w-[250px] bg-gray-100 p-4 rounded-lg shadow-md">
//             <h4 className="font-semibold">{community.name}</h4>
//             <p className="text-gray-500">{community.members} members</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg">
//               Join Community
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedCommunities;/





// import { useRef } from "react";

// const RecommendedCommunities = () => {
//   const communities = [
//     { id: 1, name: "Adaptive Sports & Recreation", members: "1.2k" },
//     { id: 2, name: "Mobility Support Network", members: "956" },
//     { id: 3, name: "Wellness Workshop", members: "750" },
//     { id: 4, name: "Chronic Pain Management", members: "1.5k" },
//     { id: 5, name: "Mental Health Awareness", members: "1.1k" },
//     { id: 6, name: "Parenting Support", members: "820" },
//     { id: 7, name: "Healthy Eating & Nutrition", members: "920" },
//     { id: 8, name: "Fitness Enthusiasts", members: "1.3k" },
//     { id: 9, name: "Meditation & Mindfulness", members: "890" },
//     { id: 10, name: "Cancer Support Group", members: "1.0k" }
//   ];

//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-full relative">
//       <h3 className="text-md font-semibold mb-3">Recommended Communities</h3>
      
//       {/* Scroll buttons */}
//       <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md">
//         ◀
//       </button>
//       <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 shadow-md">
//         ▶
//       </button>

//       {/* Horizontal Scrolling Container */}
//       <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide p-2">
//         {communities.map((community) => (
//           <div key={community.id} className="min-w-[250px] bg-gray-100 p-4 rounded-lg shadow-md">
//             <h4 className="font-semibold">{community.name}</h4>
//             <p className="text-gray-500">{community.members} members</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg">
//               Join Community
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedCommunities;

import { useRef } from "react";

const RecommendedCommunities = () => {
  const communities = [
    { id: 1, name: "Adaptive Sports & Recreation", members: "1.2k" },
    { id: 2, name: "Mobility Support Network", members: "956" },
    { id: 3, name: "Wellness Workshop", members: "750" },
    { id: 4, name: "Chronic Pain Management", members: "1.5k" },
    { id: 5, name: "Mental Health Awareness", members: "1.1k" },
    { id: 6, name: "Parenting Support", members: "820" },
    { id: 7, name: "Healthy Eating & Nutrition", members: "920" },
    { id: 8, name: "Fitness Enthusiasts", members: "1.3k" },
    { id: 9, name: "Meditation & Mindfulness", members: "890" },
    { id: 10, name: "Cancer Support Group", members: "1.0k" }
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
      <h3 className="text-lg font-bold mb-4">Recommended Communities</h3>
      
      {/* Scroll buttons */}
      <button onClick={scrollLeft} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-md">
        ◀
      </button>
      <button onClick={scrollRight} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-3 shadow-md">
        ▶
      </button>

      {/* Horizontal Scrolling Container */}
      <div ref={scrollRef} className="flex overflow-x-auto space-x-6 scrollbar-hide p-3">
        {communities.map((community) => (
          <div key={community.id} className="min-w-[350px] h-[200px] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
            <h4 className="text-xl font-semibold">{community.name}</h4>
            <p className="text-gray-600">{community.members} members</p>
            <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCommunities;




