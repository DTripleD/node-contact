import Joi from "joi";

const userSignupSchema = Joi.object({
  password: Joi.string()
    .required()
    .min(4)
    .messages({ "any.required": "missing required password field" }),
  email: Joi.string().required().email().messages({
    "any.required": "missing required email field",
  }),
  subscription: Joi.string(),
  token: Joi.string(),
});

const userSigninSchema = Joi.object({
  password: Joi.string()
    .required()
    .messages({ "any.required": "missing required password field" }),
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().required().valid("starter", "pro", "business"),
});

const userEmailSchema = Joi.object({
  email: Joi.string().required().email(),
});

export default {
  userSignupSchema,
  userSigninSchema,
  updateSubscriptionSchema,
  userEmailSchema,
};
