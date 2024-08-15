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
        const token = jwt.sign({ ...createdUser }, SECRET);
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
      const userByEmail = await User.findOne({ email: req.body.email });
      let isPasswordCorrect;

      if (userByEmail.error === undefined) {
        isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          userByEmail.password,
        );
      } else {
        return res.status(400).send({ error: "user isn't exist" });
      }

      if (isPasswordCorrect) {
        const token = jwt.sign({ ...userByEmail }, SECRET);
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
