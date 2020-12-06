//validation 
const Joi = require('@hapi/joi');

// mailsend Validation
const mailsendValidation = data => {
    const schema = Joi.object({ 
        to: Joi.string().required().email().min(6),
        content: Joi.string().required().min(6),
        subject: Joi.string().required().min(6).max(255),
    });
    return schema.validate(data);
};

module.exports.mailsendValidation = mailsendValidation;