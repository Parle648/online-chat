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
  delete: async (req, res) => {
    try {
      const { id: messageId } = req.params;

      const deletedMessage = await Message.findByIdAndDelete(messageId);

      return res
        .status(200)
        .send({ message: "Message was deleted successfully", deletedMessage });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
  update: async (req, res) => {
    try {
      const { id: messageId } = req.params;

      const updatedMessage = await Message.findByIdAndUpdate(messageId, {
        ...req.body,
      });

      return res
        .status(200)
        .send({ message: "Message was updated successfully", updatedMessage });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
};

export default messageService;
