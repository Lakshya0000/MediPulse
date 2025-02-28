// import { useState, useEffect } from "react";
// import { Send } from "lucide-react";
// import { io } from "socket.io-client";

// function Chat() {
// 	const [newMessage, setNewMessage] = useState("");
// 	const [socket, setSocket] = useState(null);

// 	useEffect(() => {
// 		const eSocket = io("http://localhost:8080/chatroom", {
// 			path: "/chatroom/socket.io",
// 		});
// 		setSocket(eSocket);
// 		eSocket.on("message", (msg) => console.log(msg));
// 	}, []);

// 	const [messages, setMessages] = useState([
// 		{
// 			id: 1,
// 			author: "John Doe",
// 			content: "Has anyone tried the new mobility assistance app?",
// 			timestamp: "09:30 am",
// 			avatar:
// 				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
// 		},
// 		{
// 			id: 2,
// 			author: "Dr. Sarah Wilson",
// 			content:
// 				"I'll coordinate care with both services. Let me know when you're prepared...",
// 			timestamp: "09:35 am",
// 			avatar:
// 				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
// 		},
// 	]);

// 	const [groups] = useState([
// 		{
// 			name: "Support Group",
// 			members: 114,
// 			image:
// 				"https://th.bing.com/th?id=OIP.1qiVa6E6x0TBFj8BEqQOtQHaED&w=337&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
// 		},
// 		{
// 			name: "Mental Health",
// 			members: 28,
// 			image:
// 				"https://th.bing.com/th/id/OIP._TIk3o71-8RVNbnNgsJ53gHaE9?w=258&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
// 		},
// 		{
// 			name: "Caregivers Circle",
// 			members: 42,
// 			image:
// 				"https://th.bing.com/th/id/OIP.fez3f0vSPVrUlGCHZFWFLgHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
// 		},
// 		{
// 			name: "Medical Support",
// 			members: 35,
// 			image:
// 				"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=150&h=150&fit=crop",
// 		},
// 		{
// 			name: "Mobility Aid Users",
// 			members: 21,
// 			image:
// 				"https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=150&h=150&fit=crop",
// 		},
// 		{
// 			name: "Wellness & Recovery",
// 			members: 56,
// 			image:
// 				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop",
// 		},
// 	]);

// 	const [selectedGroup, setSelectedGroup] = useState(0);
// 	// const [showImageInput] = useState(false);

// 	const handleSendMessage = (e) => {
// 		e.preventDefault();
// 		if (!newMessage.trim()) return;

// 		const now = new Date();
// 		const timestamp = now.toLocaleTimeString([], {
// 			hour: "2-digit",
// 			minute: "2-digit",
// 		});

// 		const newMsg = {
// 			id: messages.length + 1,
// 			author: "You",
// 			content: newMessage,
// 			timestamp: timestamp,
// 			avatar:
// 				"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=150&h=150&fit=crop&crop=faces",
// 			isUser: true,
// 		};

// 		setMessages([...messages, newMsg]);
// 		setNewMessage("");
// 	};

// 	return (
// 		<div className="flex h-screen bg-gray-100">
// 			{/* Sidebar */}
// 			<div className="w-80 bg-white border-r border-gray-200">
// 				<div className="p-4 border-b border-gray-200">
// 					<h1 className="text-xl font-semibold">Communities</h1>
// 					<div className="mt-4">
// 						<input
// 							type="text"
// 							placeholder="Search communities..."
// 							className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						/>
// 					</div>
// 				</div>

// 				<div className="overflow-y-auto">
// 					{groups.map((group, index) => (
// 						<div
// 							key={index}
// 							className={`p-4 hover:bg-gray-50 cursor-pointer ${
// 								index === selectedGroup ? "bg-blue-50" : ""
// 							}`}
// 							onClick={() => setSelectedGroup(index)}
// 						>
// 							<div className="flex items-center">
// 								{group.image ? (
// 									<img
// 										src={group.image}
// 										alt={group.name}
// 										className="w-12 h-12 rounded-full object-cover mr-3"
// 									/>
// 								) : (
// 									<span className="text-2xl mr-3">{group.icon}</span>
// 								)}
// 								<div>
// 									<h2 className="font-medium">{group.name}</h2>
// 									<p className="text-sm text-gray-500">
// 										{group.members} members
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Main Chat Area */}
// 			<div className="flex-1 flex flex-col">
// 				{/* Chat Header */}
// 				<div className="p-4 border-b border-gray-200 bg-white">
// 					<div className="flex items-center justify-between">
// 						<div className="flex items-center">
// 							{groups[selectedGroup].image ? (
// 								<img
// 									src={groups[selectedGroup].image}
// 									alt={groups[selectedGroup].name}
// 									className="w-10 h-10 rounded-full object-cover mr-3"
// 								/>
// 							) : (
// 								<span className="text-2xl mr-3">
// 									{groups[selectedGroup].icon}
// 								</span>
// 							)}
// 							<div>
// 								<h2 className="text-xl font-semibold">
// 									{groups[selectedGroup].name}
// 								</h2>
// 								<span className="text-gray-500 text-sm">
// 									{groups[selectedGroup].members} members
// 								</span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Messages */}
// 				<div className="flex-1 overflow-y-auto p-4 space-y-4">
// 					{messages.map((message) => (
// 						<div
// 							key={message.id}
// 							className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
// 						>
// 							<div
// 								className={`flex ${
// 									message.isUser ? "flex-row-reverse" : "flex-row"
// 								} items-start max-w-xl`}
// 							>
// 								<img
// 									src={message.avatar}
// 									alt={message.author}
// 									className="w-10 h-10 rounded-full object-cover "
// 								/>
// 								<div
// 									className={`mx-3 ${
// 										message.isUser ? "items-end" : "items-start"
// 									}`}
// 								>
// 									<div className="flex items-center  mb-1 ">
// 										<span className="font-medium text-sm text-gray-900 ">
// 											{message.author}
// 										</span>
// 										<span className="ml-2 text-xs text-gray-500 ">
// 											{message.timestamp}
// 										</span>
// 									</div>
// 									<div
// 										className={`rounded-lg px-4 py-2 ${
// 											message.isUser
// 												? "bg-blue-500 text-white"
// 												: "bg-gray-200 text-gray-900"
// 										}`}
// 									>
// 										{message.content}
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</div>

// 				{/* Message Input */}
// 				<form
// 					onSubmit={handleSendMessage}
// 					className="sticky bottom-0 p-4 w-full border-t border-gray-200 bg-white"
// 				>
// 					<div className="flex items-center">
// 						<input
// 							type="text"
// 							value={newMessage}
// 							onChange={(e) => setNewMessage(e.target.value)}
// 							placeholder="Type your message..."
// 							className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						/>
// 						<button
// 							type="submit"
// 							className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						>
// 							<Send className="w-5 h-5" />
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// }

// export default Chat;

import { useState, useEffect } from "react";
import { Send, Plus } from "lucide-react";
import { io } from "socket.io-client";
import Voice from "../components/Voice";

function Chat() {
	const [socket, setSocket] = useState();
	const [messages, setMessages] = useState([]);
	const [voiceMessage, setVoiceMessage] = useState();
	const [communities, setCommunities] = useState([]);
	const [selectedCommunity, setSelectedCommunity] = useState();
	const make_socket = (index) => {
		const eSocket = io("http://localhost:8080/chatroom", {
			auth: {
				room: communities[index]._id,
			},
		});
		eSocket.on(communities[index]._id, (msg) => {
			socketSetMessage(msg);
		});
		setSocket(eSocket);
	};

	function socketSetMessage(msg) {
		msg.avatar =
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces";
		msg.isUser = true;
		console.log(msg);
		setMessages((prevMessages) => [...prevMessages, msg]);
	}

	function getCookie(cname) {
		const name = `${cname}=`;
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	const handleSendMessage = async (e) => {
		e.preventDefault();
		const content = voiceMessage;
		const community_name = communities[selectedCommunity].title;

		if (content && community_name) {
			const res = await fetch("http://localhost:8080/message", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					community_name: community_name,
					content: content,
				}),
			});
			const obj = await res.json();
			socket.emit("message", obj.msg);
			obj.msg.avatar =
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces";
			obj.msg.isUser = true;

			setMessages([...messages, obj.msg]);
		}
    setVoiceMessage("")
	};

	const handleChangeCommunity = async (index) => {
		const res = await fetch(
			`http://localhost:8080/community/${communities[index]._id}`,
			{
				credentials: "include",
				method: "GET",
			},
		);
		const obj = await res.json();
		let id = getCookie("id");
		id = id.substring(3).substring(0, id.length - 4);
		for (let i = 0; i < obj.length; i++) {
			obj[i].avatar =
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop";
			if (obj[i].author === id) {
				obj[i].isUser = true;
			}
		}
		setMessages(obj);
		setSelectedCommunity(index);
		make_socket(index);
		// socket.on(communities[index]._id, (msg) => {
		// 	socketSetMessage(msg);
		// });
	};

	useEffect(() => {
		async function getCommunities() {
			const res = await fetch("http://localhost:8080/community", {
				credentials: "include",
				method: "GET",
			});
			const obj = await res.json();
			for (let i = 0; i < obj.length; i++) {
				obj[i].image =
					"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop";
			}
			setCommunities(obj);
		}
		getCommunities();
	}, []);

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<div className="w-90 bg-white border-r border-gray-200">
				<div className="p-4 border-b border-gray-200">
					<h1 className="text-xl font-semibold flex items-center gap-40">
						Communities
						<a href="/new">
							<button>
								<Plus color="#2563EB" />
							</button>
						</a>
					</h1>
					<div className="mt-4">
						<input
							type="text"
							placeholder="Search communities..."
							className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
				</div>

				<div className="overflow-y-auto">
					{communities.map((group, index) => (
						<div
							key={index}
							className={`p-4 hover:bg-gray-50 cursor-pointer ${
								index === selectedCommunity ? "bg-blue-50" : ""
							}`}
							onClick={() => handleChangeCommunity(index)}
						>
							<div className="flex items-center">
								{group.image ? (
									<img
										src={group.image}
										alt={group.name}
										className="w-12 h-12 rounded-full object-cover mr-3"
									/>
								) : (
									<span className="text-2xl mr-3">{group.icon}</span>
								)}
								<div>
									<h2 className="font-medium">{group.title}</h2>
									<p className="text-sm text-gray-500">
										{group.members} members
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Main Chat Area */}
			<div className="flex-1 flex flex-col">
				{/* Chat Header */}
				{/* <div className="p-4 border-b border-gray-200 bg-white"> */}
				{/* 	<div className="flex items-center justify-between"> */}
				{/* 		<div className="flex items-center"> */}
				{/* {communities[selectedCommunity].image ? ( */}
				{/* 	<img */}
				{/* 		src={communities[selectedCommunity].image} */}
				{/* 		alt={communities[selectedCommunity].name} */}
				{/* 		className="w-10 h-10 rounded-full object-cover mr-3" */}
				{/* 	/> */}
				{/* ) : ( */}
				{/* 	<span className="text-2xl mr-3"> */}
				{/* 		{communities[selectedCommunity].icon} */}
				{/* 	</span> */}
				{/* )} */}
				{/* <div> */}
				{/* 	<h2 className="text-xl font-semibold"> */}
				{/* 		{communities[selectedCommunity].name} */}
				{/* 	</h2> */}
				{/* 	<span className="text-gray-500 text-sm"> */}
				{/* 		{communities[selectedCommunity].members} members */}
				{/* 	</span> */}
				{/* </div> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* </div> */}

				{/* Messages */}
				<div className="flex-1 overflow-y-auto p-4 space-y-4">
					{messages.map((message) => (
						<div
							key={message.id}
							className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
						>
							<div
								className={`flex ${
									message.isUser ? "flex-row-reverse" : "flex-row"
								} items-start max-w-xl`}
							>
								<img
									src={message.avatar}
									alt={message.author_name}
									className="w-10 h-10 rounded-full object-cover "
								/>
								<div
									className={`mx-3 ${
										message.isUser ? "items-end" : "items-start"
									}`}
								>
									<div className="flex items-center  mb-1 ">
										<span className="font-medium text-sm text-gray-900 ">
											{message.author_name}
										</span>
										<span className="ml-2 text-xs text-gray-500 ">
											{message.timestamp}
										</span>
									</div>
									<div
										className={`rounded-lg px-4 py-2 ${
											message.isUser
												? "bg-blue-500 text-white"
												: "bg-gray-200 text-gray-900"
										}`}
									>
										{message.content}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Message Input */}
				<form
					onSubmit={handleSendMessage}
					className="sticky bottom-0 p-4 w-full border-t border-gray-200 bg-white"
				>
					<div className="flex items-center">
						<input
							type="text"
							placeholder="Type your message..."
							value={voiceMessage}
							onChange={(e) => setVoiceMessage(e.target.value)}
							className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<Voice setNewMessage={setVoiceMessage} />
						<button
							type="submit"
							className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<Send className="w-5 h-5" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Chat;
