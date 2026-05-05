import messageModel from "../models/message.model.js"

export const saveMessage =async ({senderId,receiverId,content}) => {

    const message=await messageModel.create({
        senderId,
        receiverId,
        content

    })
    return message
    
} 