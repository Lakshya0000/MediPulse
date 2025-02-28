import express from "express";
import cookieParser from "cookie-parser";
import connectMongo from "./connection.js";
import userRouter from "./routes/user.js";
import communityRouter from "./routes/community.js";
import messageRouter from "./routes/message.js";
import ngoRouter from "./routes/ngos.js";
import doctorRouter from "./routes/doctor.js";
import { Server } from "socket.io";
import cors from "cors";
import { createServer } from "node:http";
import eventRouter from "./routes/event.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
	},
});
const PORT = 8080;

connectMongo("mongodb+srv://khushalmidha:7H5qXGxJ03vfYt9A@cluster0.qyi5j.mongodb.net/");

app.use(
	cors({
		origin: ["http://localhost:5173"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);
app.use(cookieParser());
app.use(express.json());
app.use("/user", userRouter);
app.use("/doctor", doctorRouter);
app.use("/community", communityRouter);
app.use("/message", messageRouter);
app.use("/ngo", ngoRouter);
app.use("/event", eventRouter);

io.of("/chatroom").on("connection", (socket) => {
	console.log("socket connected");
	const room_id = socket.handshake.auth.room;
	// socket.join(room_id);
	socket.on("message", (msg) => {
		socket.emit("message", msg);
	});
	// socket.to(room_id).emit(message);
	// socket.on("test2", (msg) => console.log(msg));
});

server.listen(PORT);
console.log("")