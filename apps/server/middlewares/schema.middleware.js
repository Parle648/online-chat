const bodyVerify = (schema) => {
  return (req, res, next) => {
    const isBodyValid = schema.validate(req.body);

    if (isBodyValid.error) {
      return res
        .status(400)
        .send({ error: isBodyValid.error.details[0].message });
    } else {
      next();
    }
  };
};

const paramsVerify = (schema) => {
  return (req, res, next) => {
    const isParamsValid = schema.validate(req.params);

    if (isParamsValid.error) {
      return res
        .status(400)
        .send({ error: isParamsValid.error.details[0].message });
    } else {
      next();
    }
  };
};

export { bodyVerify, paramsVerify };
