import jwt from "jsonwebtoken";
import { SECRET } from "../config/jwt.js";
import User from "../data/models/user.model.js";

const isUserAuthorized = () => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (token === undefined || token === null) {
        return res.status(401).send({ message: "user unauthorized" });
      }

      const decodedToken = jwt.decode(token, SECRET);
      const isUserExist = await User.findById(decodedToken._doc._id);

      if (isUserExist.id === decodedToken._doc._id) {
        next();
      } else {
        return res.status(401).send({ message: "User unauthorized" });
      }
    } catch (error) {
      return res.status(500).send({ message: "Internal server error" });
    }
  };
};

export default isUserAuthorized;
