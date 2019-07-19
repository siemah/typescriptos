import { MongoErrorMessage } from '../types/mongo';

/**
 * render a error message depend in a kind of mongoDB error
 * @param {any} err is the error fired by mongoose
 * @return {string} the message
 */
export const getMongoErrorMessage: MongoErrorMessage = err => {
  const msg: string = err.kind === "ObjectId"
    ? "Check book details sended!"
    : '';

  return msg;
}