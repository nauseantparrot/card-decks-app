import { NextFunction, Request, Response } from 'express';
import { fullDeck, shortDeck } from '../models';
import { Deck, Type } from '../ts';

/**
 * Assign the deck cards depending of its type
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const assignCards = (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;

  if (deck.type === Type.Full) deck.cards = fullDeck;
  else deck.cards = shortDeck;

  next();
};

export default assignCards;
