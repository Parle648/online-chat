import Chat from "../data/models/chat.model.js";

const chatSerivice = {
  create: async (req, res) => {
    try {
      const createdChat = await Chat.create({ ...req.body });
      return res
        .status(201)
        .send({ message: "chat was created successfully", createdChat });
    } catch (error) {
      return res.status(500).send({ error });
    }
  },
  getByUser: async (req, res) => {
    try {
      const chats = await Chat.find({ users: { $in: [req.query.userId] } });

      return res.status(200).send(chats);
    } catch (error) {
      return res.status(500).send({ error });
    }
  },
};

export default chatSerivice;
