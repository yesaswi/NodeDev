const Joi = require("@hapi/joi");

//validation
const registerValidation = async data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
  });
  return await schema.validateAsync(data);
};

const loginValidation = async data => {
  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    }),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
  });
  return await schema.validateAsync(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
