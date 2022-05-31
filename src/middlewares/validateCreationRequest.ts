import { NextFunction, Request, Response } from 'express';
import { ApiError, creationRequest } from '../models';
import { Deck, Type } from '../ts';

type initialAttributes = {
  type: 'FULL' | 'SHORT';
  shuffled: boolean;
};

/**
 * Validates the body used for creating a new deck
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const validateCreationSchema = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const attributes: initialAttributes = await creationRequest.validateAsync(req.body);

    const deck: Deck = {
      type: attributes.type === 'FULL' ? Type.Full : Type.Short,
      shuffled: attributes.shuffled,
      cards: [],
    }

    res.locals.deck = deck;
    next();
  } catch (e) {
    const error = new ApiError(e.message);
    error.status = 400;
    next(error);
  }
};

export default validateCreationSchema;
