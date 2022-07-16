import * as Joi from 'joi';

export const productValidator = {
    createProduct: Joi.object({
        title: Joi
            .string()
            .min(2)
            .max(50)
            .required(),
        text: Joi
            .string()
            .required(),
        price: Joi
            .number()
            .min(1)
            .max(999999999)
            .required(),
        stockCount: Joi
            .number()
            .min(1)
            .max(999999999)
            .required(),
        photos: Joi
            .string()
            .required(),
        shopId: Joi
            .number()
            .required(),
    }),
    updateProduct: Joi.object({
        stockCount: Joi
            .number()
            .min(1)
            .max(999999999)
            .required(),
    })
};
