import { useState } from "react";
import {useNavigate} from "react-router-dom";

const CommunityForm = () => {
	const [communityName, setCommunityName] = useState("");
	const [description, setDescription] = useState("");
	const [privacy, setPrivacy] = useState("Public");
	const [category, setCategory] = useState("Support Group");
  const redirect = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log({
			communityName,
			description,
			privacy,
			category,
		});
		const res = await fetch("http://localhost:8080/community/create", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ title: communityName, bio: description }),
		});
    const obj = await res.json();
    if(res.status===201){
      return redirect("/chat");
    }
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl font-semibold mb-4">Create New Community</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Community Name
						</label>
						<input
							type="text"
							className="w-full p-2 border rounded mt-1"
							placeholder="Enter community name"
							value={communityName}
							onChange={(e) => setCommunityName(e.target.value)}
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Description
						</label>
						<textarea
							className="w-full p-2 border rounded mt-1"
							placeholder="Describe your community"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Privacy Settings
						</label>
						<select
							className="w-full p-2 border rounded mt-1"
							value={privacy}
							onChange={(e) => setPrivacy(e.target.value)}
						>
							<option value="Public">Public (open to all)</option>
							<option value="Private">Private (invite only)</option>
						</select>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700">
							Category
						</label>
						<select
							className="w-full p-2 border rounded mt-1"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option>Support Group</option>
							<option>Technology</option>
							<option>Health</option>
							<option>Education</option>
						</select>
					</div>

					<div className="flex justify-between">
						<button
							type="button"
							className="bg-gray-300 p-2 rounded text-gray-700"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="bg-blue-600 text-white p-2 rounded"
						>
							Create Community
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CommunityForm;
