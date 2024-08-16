import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import { paramsVerify } from "../../middlewares/schema.middleware.js";
import SCHEMAS from "../../common/const/joiSchemas.js";

const deleteMessage = (Router, service) => {
  const router = Router();

  router.delete(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.MESSAGE.DELETE),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default deleteMessage;
