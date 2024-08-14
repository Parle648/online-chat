import API_PATHS from "../common/const/routes.js";
import authService from "../services/auth.service.js";
import userService from "../services/user.service.js";
import login from "./auth/login.js";
import signUp from "./auth/signup.js";
import getUser from "./user/getUser.js";

const apiRoutes = (Router) => {
  const apiRouter = Router();

  apiRouter.use(API_PATHS.USER.GET_ONE, getUser(Router, userService.getOne));
  apiRouter.use(API_PATHS.AUTH.SIGN_UP, signUp(Router, authService.signUp));
  apiRouter.use(API_PATHS.AUTH.LOGIN, login(Router, authService.login));

  return apiRouter;
};

export default apiRoutes;
