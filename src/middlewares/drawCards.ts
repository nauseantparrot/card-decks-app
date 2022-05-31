import { NextFunction, Request, Response } from 'express';
import { DecksService } from '../services';
import { Deck } from '../ts';

/**
 * Draws a specific amount of cards
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const drawCards = async (req: Request, res: Response, next: NextFunction) => {
  const deck: Deck = res.locals.deck;

  const drawedCards = [];
  const cardsAmount = Number(req.query.amount ?? 1);

  for (let i = 0; i < cardsAmount; i++) {
    const card = deck.cards.shift();
    drawedCards.push(card);
  }

  if (drawedCards.length > 0)
    await DecksService.update(deck);

  res.locals.cards = drawedCards;
  next();
};

export default drawCards;
