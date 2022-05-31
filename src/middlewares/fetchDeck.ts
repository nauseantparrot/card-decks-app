import { NextFunction, Request, Response } from 'express';
import { DecksService } from '../services';
import { ApiError } from '../models';
import { Deck } from '../ts';

/**
 * Fetch the deck related to the given id
 * @param req Request
 * @param res Response
 * @param next Next middleware
 * @param id Deck id
 */
const fetchDeck = async (req: Request, res: Response, next: NextFunction, id: string) => {
  const deck: Deck = await DecksService.fetchById(id);

  if (deck !== null) {
    res.locals.deck = deck;
    next();
  } else {
    const error = new ApiError('There is no deck related to the provided id');
    error.status = 404;
    next(error);
  }
};

export default fetchDeck;
