import mongoose from "mongoose";
const followSchema = new mongoose.Schema(
  {
    followerId: {
      type: String, // from auth service
      required: true,
    },
    followingId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
followSchema.index({ followerId: 1, followingId: 1 }, { unique: true });
export default mongoose.model("Follow", followSchema);
