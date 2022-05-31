import { connect } from 'mongoose';

/**
 * Create a connection with the mongo database
 * @param url Mongo URL
 */
const config = (url: string) => connect(url);

export {
  config,
};
