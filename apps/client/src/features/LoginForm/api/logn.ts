import axios from "axios";
import { appStore } from "../../../app/store";
import { updatetoken } from "../../../shared/slices/token";

const login = async (data: { email: string; password: string }) => {
  console.log(data);

  const createdUser = await axios.post(
    "http://localhost:3001/reenbit-api/auth/login",
    { ...data },
  );

  if (createdUser.status === 200) {
    appStore.dispatch(updatetoken(createdUser.data.token));
  }
};

export default login;
