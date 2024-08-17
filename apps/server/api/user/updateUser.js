import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import {
  bodyVerify,
  paramsVerify,
} from "../../middlewares/schema.middleware.js";

const updateUser = (Router, service) => {
  const router = Router();

  router.put(
    "/:id",
    isUserAuthorized(),
    paramsVerify(SCHEMAS.USER.UPDATE.PARAMS),
    bodyVerify(SCHEMAS.USER.UPDATE.BODY),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default updateUser;
