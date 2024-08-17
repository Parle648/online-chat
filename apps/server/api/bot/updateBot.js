import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import {
  bodyVerify,
  paramsVerify,
} from "../../middlewares/schema.middleware.js";

const updateBot = (Router, service) => {
  const router = Router();

  router.put(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.BOT.UPDATE.PARAMS),
    bodyVerify(SCHEMAS.BOT.UPDATE.BODY),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default updateBot;
