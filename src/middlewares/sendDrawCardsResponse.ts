import { NextFunction, Request, Response } from 'express';
import { Card, Cards } from '../ts';

/**
 * Send the response related to drawing an amount of cards
 * @param req Request
 * @param res Response
 * @param next Next middleware
 */
const sendDrawCardsResponse = (req: Request, res: Response, next: NextFunction) => {
  const cards: Cards = res.locals.cards;

  const response = {
    cards: cards.map(({ value, suit, code }: Card) => ({
      value,
      suit,
      code,
    })),
  };

  res.json(response);
};

export default sendDrawCardsResponse;
