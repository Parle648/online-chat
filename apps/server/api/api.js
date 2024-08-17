import API_PATHS from "../common/const/routes.js";
import authService from "../services/auth.service.js";
import botService from "../services/bot.service.js";
import chatSerivice from "../services/chat.service.js";
import messageService from "../services/message.service.js";
import userService from "../services/user.service.js";
import login from "./auth/login.js";
import signUp from "./auth/signup.js";
import createBot from "./bot/createBot.js";
import createChat from "./chat/createOne.js";
import deleteChat from "./chat/deleteChat.js";
import getAllByUser from "./chat/getAllByUser.js";
import changeMessage from "./message/changeMessage.js";
import createMessage from "./message/createMessage.js";
import deleteMessage from "./message/deleteMessage.js";
import getAllUsers from "./user/getAllUsers.js";
import getUser from "./user/getUser.js";
import updateUser from "./user/updateUser.js";

const apiRoutes = (Router) => {
  const apiRouter = Router();

  apiRouter.use(API_PATHS.AUTH.SIGN_UP, signUp(Router, authService.signUp));
  apiRouter.use(API_PATHS.AUTH.LOGIN, login(Router, authService.login));

  apiRouter.use(API_PATHS.USER, updateUser(Router, userService.update));
  apiRouter.use(API_PATHS.USER, getUser(Router, userService.getOne));
  apiRouter.use(API_PATHS.USER, getAllUsers(Router, userService.getAll));

  apiRouter.use(API_PATHS.CHAT, createChat(Router, chatSerivice.create));
  apiRouter.use(API_PATHS.CHAT, deleteChat(Router, chatSerivice.delete));
  apiRouter.use(API_PATHS.CHAT, getAllByUser(Router, chatSerivice.getByUser));

  apiRouter.use(
    API_PATHS.MESSAGE,
    createMessage(Router, messageService.createOne),
  );

  apiRouter.use(
    API_PATHS.MESSAGE,
    deleteMessage(Router, messageService.delete),
  );

  apiRouter.use(
    API_PATHS.MESSAGE,
    changeMessage(Router, messageService.update),
  );

  apiRouter.use(API_PATHS.BOT, createBot(Router, botService.create));

  return apiRouter;
};

export default apiRoutes;
