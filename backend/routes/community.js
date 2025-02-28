import { Router } from "express";
import userValidation from "../middleware/validateUser.js";
import {
	createCommunity,
	getAllCommunities,
	getAllMessages,
  getAllUserCommunities,
  joinCommunity
} from "../controller/community.js";

const communityRouter = Router();

communityRouter.get("/", userValidation, getAllCommunities);
communityRouter.post("/create", userValidation, createCommunity);
communityRouter.get("/user", userValidation, getAllUserCommunities);
communityRouter.post("/join", userValidation, joinCommunity);
communityRouter.get("/:id", userValidation, getAllMessages);

export default communityRouter;
