import { bodyVerify } from "../../middlewares/schema.middleware.js";
import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";

const createChat = (Router, service) => {
  const router = Router();

  router.post(
    "/",
    isUserAuthorized(),
    bodyVerify(SCHEMAS.CHAT.CREATE),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default createChat;
