const getAllByUser = (Router, service) => {
  const router = Router();

  router.get("/", (req, res) => {
    return service(req, res);
  });

  return router;
};

export default getAllByUser;
