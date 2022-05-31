import { Cards, Type } from '..';

interface Deck {
  _id?: string;
  type: Type;
  shuffled: boolean;
  cards: Cards;
};

export default Deck;
