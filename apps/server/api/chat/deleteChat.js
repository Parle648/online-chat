import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import { paramsVerify } from "../../middlewares/schema.middleware.js";

const deleteChat = (Router, service) => {
  const router = Router();

  router.delete(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.CHAT.DELETE),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default deleteChat;
