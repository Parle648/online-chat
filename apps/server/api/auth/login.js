import SCHEMAS from "../../common/const/joiSchemas.js";
import { bodyVerify } from "../../middlewares/schema.middleware.js";

const login = (Router, service) => {
  const router = Router();

  router.post("/", bodyVerify(SCHEMAS.AUTH.SIGN_IN_SCHEMA), (req, res) => {
    return service(req, res);
  });

  return router;
};

export default login;
