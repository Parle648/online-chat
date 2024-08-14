import joi from "joi";

const SCHEMAS = {
  AUTH: {
    SIGN_UP_SCHEMA: joi.object({
      name: joi.string().required(),
      surname: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
    }),
    SIGN_IN_SCHEMA: joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    }),
  },
};

export default SCHEMAS;
