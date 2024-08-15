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
  CHAT: {
    CREATE: joi.object({
      lastMessage: joi.string().required().allow(""),
      users: joi
        .array()
        .items(joi.string().pattern(/^[0-9a-fA-F]{24}$/))
        .default([]),
      messages: joi
        .array()
        .items(joi.string().pattern(/^[0-9a-fA-F]{24}$/))
        .default([]),
    }),
  },
};

export default SCHEMAS;
