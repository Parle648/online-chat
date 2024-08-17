import mongoose from "mongoose";

const botSchema = mongoose.Schema({
  bot_name: {
    type: String,
    require: true,
    unique: true,
  },
  bot_surname: {
    type: String,
    require: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

const Bot = mongoose.model("Bot", botSchema);

export default Bot;
