import SCHEMAS from "../../common/const/joiSchemas.js";
import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";
import { bodyVerify } from "../../middlewares/schema.middleware.js";

const createMessage = (Router, service) => {
  const router = Router();

  router.post(
    "/",
    isUserAuthorized(),
    bodyVerify(SCHEMAS.MESSAGE.CRETAE),
    (req, res) => {
      return service(req, res);
    },
  );

  return router;
};

export default createMessage;
