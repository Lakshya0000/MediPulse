import { Router } from "express";
import userValidation from "../middleware/validateUser.js";
import { createMessage } from "../controller/message.js";

const messageRouter = Router();

messageRouter.post("/", userValidation, createMessage);

export default messageRouter;
