import API_PATHS from "../common/const/routes.js";
import authService from "../services/auth.service.js";
import chatSerivice from "../services/chat.service.js";
import userService from "../services/user.service.js";
import login from "./auth/login.js";
import signUp from "./auth/signup.js";
import createChat from "./chat/createOne.js";
import getAllUsers from "./user/getAllUsers.js";
import getUser from "./user/getUser.js";

const apiRoutes = (Router) => {
  const apiRouter = Router();

  apiRouter.use(API_PATHS.AUTH.SIGN_UP, signUp(Router, authService.signUp));
  apiRouter.use(API_PATHS.AUTH.LOGIN, login(Router, authService.login));
  apiRouter.use(API_PATHS.USER, getUser(Router, userService.getOne));
  apiRouter.use(API_PATHS.USER, getAllUsers(Router, userService.getAll));

  apiRouter.use(API_PATHS.CHAT, createChat(Router, chatSerivice.getAll));

  return apiRouter;
};

export default apiRoutes;
