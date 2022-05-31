import { NextFunction, Request, Response } from 'express';
import { DecksService } from '../services';
import { Deck } from '../ts';

/**
 * Persists the deck
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const createDeck = async (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;

  const newDeck = await DecksService.create(deck);

  res.locals.deck = newDeck;
  next();
};

export default createDeck;
