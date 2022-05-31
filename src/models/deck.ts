import mongoose, { Schema } from 'mongoose';
import * as uuid from 'uuid';
import { Deck as DeckInterface } from '../ts';

const deckSchema = new Schema<DeckInterface>({
  _id: {
    type: String,
    default: uuid.v4,
  },
  type: {
    type: String,
    required: true,
  },
  shuffled: {
    type: Boolean,
    required: true,
  },
  cards: {
    type: [
      {
        value: String,
        suit: String,
        code: String,
      },
    ],
    required: true,
  },
});

const Deck = mongoose.model<DeckInterface>('Deck', deckSchema);

export default Deck;
