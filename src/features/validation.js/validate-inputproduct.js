import Joi from "joi";
import validate from "../../utils/validate";

const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "product name is required",
    "any.required": "product name  is required",
  }),
  price: Joi.string().required().messages({
    "string.empty": "price is required",
    "any.required": "price  is required",
  }),
  color: Joi.string().required().messages({
    "string.empty": "color is required",
    "any.required": "color is required",
  }),
});

const validateInput = (input) => validate(productSchema)(input);

export default validateInput;
