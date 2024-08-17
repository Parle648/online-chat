import Bot from "../data/models/bot.model.js";
import Message from "../data/models/message.model.js";

const botService = {
  create: async (req, res) => {
    try {
      const createdBot = await Bot.create(req.body);

      if (createdBot === null) {
        return res.status(403).send({ message: "Bad request" });
      }

      return res.status(201).send({ message: "Bot created", createdBot });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error", error });
    }
  },
  update: async (req, res) => {
    try {
      const updatedBot = await Bot.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
      );

      if (updatedBot === null) {
        return res.status(403).send({ message: "Bad request" });
      }

      return res.status(201).send({ message: "Bot updated", updatedBot });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      const botId = req.params.id;
      const deletedBot = await Bot.findByIdAndDelete(botId);
      // todo delete all messages
      // const deletedMessages = await Message.deleteMany({})
      return res.status(201).send({ message: "Bot deleted", deletedBot });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error", error });
    }
  },
};

export default botService;
