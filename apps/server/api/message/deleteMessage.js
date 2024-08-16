import isUserAuthorized from "../../middlewares/isAuthorized.middleware.js";

const deleteMessage = (Router, service) => {
  const router = Router();

  router.delete("/:id", isUserAuthorized(), (req, res) => {
    return service(req, res);
  });

  return router;
};

export default deleteMessage;
