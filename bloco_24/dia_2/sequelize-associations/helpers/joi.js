const Joi = require('joi');

const code = {
    'string.min': 422,
    'string.base': 422,
    'string.empty': 400,
    'any.required': 400,
    'number.base': 400,
}

const validate = (data) => {
    const { name, plan_id } = data;
    const schema = Joi.object({
        name: Joi.string().min(5).required().messages({
            'string.min': `"name" should have a minimum length of 5`,
            'string.base': `"name" should be a type of 'text'`,
            'string.empty': '"name" is not allowed to be empty',
        }),
        plan_id: Joi.number().positive().required(),
    });
    const { error } = schema.validate({ name, plan_id });
    if (error) {
        console.log(error)
        return {
            error: error.details[0].message,
            code: code[error.details[0].type],
        }
    }
    return error;
};

module.exports = validate;