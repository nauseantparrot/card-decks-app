import Joi from 'joi';

const creationRequest = Joi.object({
  type: Joi
    .string()
    .pattern(/^(FULL|SHORT)$/)
    .required(),
  shuffled: Joi
    .boolean()
    .required(),
});

export default creationRequest;
