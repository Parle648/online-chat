import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import { paramsVerify } from "../../middlewares/schema.middleware.js";

const deleteBot = (Router, service) => {
  const router = Router();

  router.delete(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.BOT.DELETE.PARAMS),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default deleteBot;
