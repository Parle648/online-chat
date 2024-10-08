const getAllUsers = (Router, service) => {
  const router = Router();

  router.get("/", (req, res) => {
    return service(req, res);
  });

  return router;
};

export default getAllUsers;
