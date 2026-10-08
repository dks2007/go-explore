import {celebrate, Joi, Segments} from "celebrate";

export const createTripValidation = celebrate({
    [Segments.BODY]: Joi.object({
        title: Joi.string().trim().min(3).max(100).required(),
        contry: Joi.string().trim().required(),
        city: Joi.string().trim().required(),
        description: Joi.string().trim().max(1000).allow()
    }),
});

export const updateTripValidation = celebrate({
    [Segments.BODY]: Joi.object({
        title: Joi.string().trim().min(3).max(100),
        contry: Joi.string().trim(),
        city: Joi.string().trim(),
        description: Joi.string().trim().max(1000).allow()
    }).min(1),
});

export const tripIdValidation = celebrate({
    [Segments.PARAMS]: Joi.object({
        id: Joi.string().hex().length(24).required(),
    }),
});