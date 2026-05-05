import followModel from "../models/follow.model.js"

export const followUserService =async ({followerId,followingId}) => {
    if(followerId===followingId){
        throw new Error("you cant follow. yourself")
    } 
    
    const follow= await followModel.create({
        followerId,
        followingId
    })
    return follow
}

export const unfollowUserService=async ({followerId,followingId}) => {

    await followModel.findOneAndDelete({followerId,followingId})
    return {message:"unfollowed  successfully"}
}

export const getFollowerService =async (userId) => {
    return await followModel.find({followingId:userId})
}

export const getFollowingService =async (userId) => {
    return await followModel.find({followerId:userId})
}

