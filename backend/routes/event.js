import { Router } from "express";
import userValidation from "../middleware/validateUser.js";
import { createEvent } from "../controller/event.js";

const eventRouter = Router();

eventRouter.post("/", userValidation, createEvent);

export default eventRouter;
