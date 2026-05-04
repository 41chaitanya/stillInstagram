import express from "express";
import { followUser, getfollower, getFollowing, unfollowUser } from "../controllers/follow.controller.js";
const router = express.Router();


router.post("/:followingId",followUser)
router.post("/:followingId",unfollowUser)


router.get("/followers/:userId",getfollower)
router.get("/followers/:userId",getFollowing)
export default router;