import Joi from "joi";

import validate from "../../utils/validate";

const registerSchema = Joi.object({
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0][0-9]{9}$/),
  ])
    .required()
    .messages({
      "alternatives.match": "invalid email or moblie",
    }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);

export default validateRegister;
