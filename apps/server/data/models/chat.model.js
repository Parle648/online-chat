import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    lastMessage: {
      type: String,
      require: true,
      default: "",
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
