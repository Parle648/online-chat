import User from "../data/models/user.model.js";

const userService = {
  getOne: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const userData = {
        _id: user._id,
        name: user.name,
        surname: user.surname,
      };

      return res.status(200).send(userData);
    } catch (error) {
      return res.status(500).send({ error });
    }
  },
  update: async (req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );

      if (updatedUser === null) {
        return res.status(403).send({ message: "User isn't exists" });
      }

      return res.status(200).send({ message: "User updated", updatedUser });
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  },
  getAll: async (req, res) => {
    try {
      console.log(req.query);
      const users = await User.find(req.query);
      const mappedUsers = users.map((user) => {
        return {
          _id: user._id,
          name: user.name,
          surname: user.surname,
        };
      });

      return res.status(200).send([...mappedUsers]);
    } catch (error) {
      return res.status(500).send({ error: "Internal server error" });
    }
  },
};

export default userService;
