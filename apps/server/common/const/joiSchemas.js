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
    DELETE: joi.object({
      id: joi.string().required(),
    }),
  },
  MESSAGE: {
    CRETAE: joi.object({
      text: joi.string().required(),
      writerId: joi.string().required(),
      chat: joi
        .string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
    DELETE: joi.object({
      id: joi.string().required(),
    }),
    UPDATE_PARAMS: joi.object({
      id: joi.string().required(),
    }),
    UPDATE_BODY: joi.object({
      text: joi.string().required(),
    }),
  },
  USER: {
    UPDATE: {
      BODY: joi.object({
        name: joi.string(),
        surname: joi.string(),
        email: joi.string().email(),
        password: joi.string(),
      }),
      PARAMS: joi.object({
        id: joi.string().required(),
      }),
    },
  },
  BOT: {
    CREATE: {
      BODY: joi.object({
        bot_name: joi.string().required(),
        bot_surname: joi.string().required(),
        user: joi.string().required(),
      }),
    },
    UPDATE: {
      BODY: joi.object({
        bot_name: joi.string(),
        bot_surname: joi.string(),
        user: joi.string(),
      }),
      PARAMS: joi.object({
        id: joi.string().required(),
      }),
    },
    DELETE: {
      PARAMS: joi.object({
        id: joi.string().required(),
      }),
    },
  },
};

export default SCHEMAS;
