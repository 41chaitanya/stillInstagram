Current schema kya kar raha hai?
{
  senderId,
  receiverId,
  content
}


sirf text (content) store ho raha hai
koi media support nahi



later. supptor all. formate. 

const messageSchema = new mongoose.Schema(
  {
    senderId: String,
    receiverId: String,

    type: {
      type: String,
      enum: ["text", "image", "video", "file"],
      default: "text"
    },

    content: {
      type: String, // text message
      default: ""
    },

    mediaUrl: {
      type: String, // image/video/file URL (ImageKit etc.)
      default: ""
    }
  },
  { timestamps: true }
);