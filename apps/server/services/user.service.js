const userService = {
  getOne: async (req, res) => {
    return res.status(200).send({ message: "hello" });
  },
};

export default userService;
