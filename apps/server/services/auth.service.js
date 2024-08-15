import jwt from "jsonwebtoken";
import User from "../data/models/user.model.js";
import { SECRET } from "../config/jwt.js";

const authService = {
  signUp: async (req, res) => {
    try {
      const userDTO = req.body;
      const createdUser = await User.create(userDTO);

      console.log(createdUser);

      if (createdUser.error === undefined) {
        const token = jwt.sign({ createdUser }, SECRET);
        return res
          .status(201)
          .send({ message: "user created successfully", token });
      } else {
        throw new Error();
      }
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      return res.status(200).send({ message: "user logged in successfully" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
};

export default authService;
