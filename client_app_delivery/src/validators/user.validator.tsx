import Joi from "joi";

export const UserValidator = {
    userValid: Joi.object({
        firstName: Joi.string().regex(new RegExp("^[[a-zA-ZА-яёЁіІїЇ]{1,20}$")).required().messages({
            "string.empty": "field is empty",
            "string.pattern.base": "min 1 max 200"
        }),
        lastName: Joi.string().regex(new RegExp("^[[a-zA-ZА-яёЁіІїЇ]{1,20}$")).required().messages({
            "string.empty": "field is empty",
            "string.pattern.base": "min 1 max 200"
        }),
        model: Joi.string().regex(new RegExp("^[[a-zA-ZА-яёЁіІїЇ]{1,20}$")).required().messages({
            "string.empty": "field is empty",
            "string.pattern.base": "min 1 max 200"
        }),
        age: Joi.number().min(18).max(100).required().messages({
            "number.base": " Age from 18 - 100",
            "number.min": "Age min 18",
        }),
        phone: Joi.string().min(10).max(14).required().messages({
            "string.empty": "field is empty",

        }),
        email: Joi.string().regex(new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,)).required().messages({
            "string.empty": "field is empty",

        }),

    })
}
