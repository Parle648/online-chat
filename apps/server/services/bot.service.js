import Bot from "../data/models/bot.model.js";

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
      return res.status(201).send({ message: "Bot updated" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
  delete: async (req, res) => {
    try {
      return res.status(201).send({ message: "Bot deleted" });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error", error });
    }
  },
};

export default botService;
