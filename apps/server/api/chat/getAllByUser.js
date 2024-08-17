import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";

const getAllByUser = (Router, service) => {
  const router = Router();

  router.get("/", isUserAuthorized(), (req, res) => {
    return service(req, res);
  });

  return router;
};

export default getAllByUser;
