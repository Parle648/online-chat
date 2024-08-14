const authService = {
  signUp: async (req, res) => {
    try {
      return res.status(201).send({ message: "user successfully created" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
  login: async (req, res) => {
    try {
      return res.status(200).send({ message: "user logged in successfully" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },
};

export default authService;
