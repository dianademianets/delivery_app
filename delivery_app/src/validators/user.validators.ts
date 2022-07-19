import * as Joi from 'joi';
import { regexp } from '../constants/regexp';

export const userValidator = {
    createUser: Joi.object({
        firstName: Joi
            .string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        lastName: Joi
            .string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        phone: Joi
            .string()
            .min(10)
            .max(14)
            .required(),
        email: Joi
            .string()
            .regex(regexp.EMAIL)
            .trim()
            .required(),
    })
};
