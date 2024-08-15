import jwt from "jsonwebtoken";
import User from "../data/models/user.model.js";
import { SECRET } from "../config/jwt.js";
import bcrypt from "bcrypt";

const authService = {
  signUp: async (req, res) => {
    try {
      const userDTO = req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const createdUser = await User.create({
        ...userDTO,
        password: hashedPassword,
      });

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
      const isUserExist = await User.findOne(req.body);

      if (isUserExist.error === undefined) {
        const token = jwt.sign({ isUserExist }, SECRET);
        return res
          .status(200)
          .send({ message: "user logged in successfully", token });
      }
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
};

export default authService;
