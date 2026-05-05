import { asyncHandler } from "../middlewares/asyncHandler.middleware.js";
import {
  followUserService,
  getFollowerService,
  getFollowingService,
  unfollowUserService,
} from "../services/follow.service.js";


export const followUser = asyncHandler(async (req, res) => {
  const followerId = req.header("x-user-id");
  const {followingId} = req.params;
  const result = await followUserService({
    followerId,
    followingId,
  });
  res.status(201).json({ success: true, result });
});


export const unfollowUser = asyncHandler(async (req, res) => {
  const followerId = req.header("x-user-id");
  const {followingId} = req.params;
  const result = await unfollowUserService({
    followerId,
    followingId,
  });
  res.json({ success: true, result });
});


export const getfollower = asyncHandler(async (req, res) => {
  const {userId} = req.params;

  const allFollowers = await getFollowerService(userId);
  res.json({ success: true, allFollowers });
});
export const getFollowing = asyncHandler(async (req, res) => {
    const {userId} = req.params;

    const allFollowing=await getFollowingService(userId)
    res.json({ success: true, allFollowing });

});
