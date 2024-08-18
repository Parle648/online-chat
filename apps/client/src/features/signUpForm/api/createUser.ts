import axios from "axios";
import { appStore } from "../../../app/store";
import { updatetoken } from "../../../shared/slices/token";

const createUser = async (data: {
  name: string;
  surname: string;
  email: string;
  password: string;
}) => {
  const createdUser = await axios.post(
    "http://localhost:3001/reenbit-api/auth/sign-up",
    { ...data },
  );

  if (createdUser.status === 201) {
    appStore.dispatch(updatetoken(createdUser.data.token));
  }
};

export default createUser;
