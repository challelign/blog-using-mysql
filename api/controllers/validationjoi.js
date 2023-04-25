// const Joi = require('joi');
import Joi from '@hapi/joi';
export const userValidation = (data) => {
  const userSchema = Joi.object({
    username: Joi.string().alphanum().min(5).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  return userSchema.validate(data);

  // return Joi.validate(data, userSchema);
};
