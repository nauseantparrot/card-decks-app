import { NextFunction, Request, Response } from 'express';
import { shuffle } from '../utils';
import { Cards, Deck } from '../ts';

/**
 * Shuffles the deck cards
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const shuffleCards = (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;
  const cards: Cards = deck.cards;

  if (deck.shuffled) shuffle(cards);

  next();
};

export default shuffleCards;
