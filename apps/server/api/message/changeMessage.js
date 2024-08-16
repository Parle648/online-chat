import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import {
  bodyVerify,
  paramsVerify,
} from "../../middlewares/schema.middleware.js";

const changeMessage = (Router, service) => {
  const router = Router();

  router.put(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.MESSAGE.UPDATE_PARAMS),
    bodyVerify(SCHEMAS.MESSAGE.UPDATE_BODY),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default changeMessage;
