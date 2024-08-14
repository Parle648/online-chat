import SCHEMAS from "../../common/const/joiSchemas.js";
import { bodyVerify } from "../../middlewares/schema.middleware.js";

const signUp = (Router, service) => {
  const router = Router();

  router.post("/", bodyVerify(SCHEMAS.AUTH.SIGN_UP_SCHEMA), (req, res) => {
    return service(req, res);
  });

  return router;
};

export default signUp;
