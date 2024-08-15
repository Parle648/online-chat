import Message from "../data/models/message.model.js";

const messageService = {
  createOne: async (req, res) => {
    try {
      const createdMessage = await Message.create(req.body);

      return res.status(201).send({
        message: "Message created successfully",
        createdMessage,
      });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
};

export default messageService;
