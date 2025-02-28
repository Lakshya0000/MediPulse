import React from "react";
import CommunityCard from "../components/CommunityCard";
import EventCard from "../components/EventCard";
import MessageCard from "../components/MessageCard";
import RecommendationCard from "../components/RecommendationCard";
import Chat from "./Chat";
import { Link } from "react-router-dom";
import RecommendationDoctors from "../components/RecommendationDoctors";

const Dashboard = () => {
	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<h2 className="text-2xl font-semibold">
				Welcome to Your Health Dashboard
			</h2>

			<div className="grid grid-cols-3 gap-4 mt-4">
				<Link to="/chat">
					<CommunityCard />
				</Link>
				<MessageCard />
				<EventCard />
			</div>

			{/* <div className="mt-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <ActivityFeed />
      </div> */}

			<div className="mt-6">
				<h3 className="text-lg font-semibold">Recommended Communities</h3>
				<RecommendationCard />
			</div>

			<div className="bg-blue-500 h-48 pt-12 mt-12 shadow-md border rounded-sm">
				<h1 className="flex justify-center font-bold tracking-tighter text-4xl mb-1 text-white">
					Find Specialized Healthcare Providers
				</h1>
				<p className="flex justify-center text-xl text-white">
					Connect with specialized and experienced doctors based on the disease
					you are facing
				</p>
			</div>

			<div className="mb-10">
				<RecommendationDoctors />
			</div>
		</div>
	);
};

export default Dashboard;
