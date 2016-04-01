'use strict';

const graphql = require('graphql'),
  relay = require('graphql-relay'),
  resolvers = require('../resolvers').user;


module.exports = (refs) => ({
  type: refs.UserConnection,
  args: relay.connectionArgs,
  resolve: (parent, args, root) => {
    return relay.connectionFromPromisedArray(
      resolvers.getUsersResolver(args),
      args
    );
  }
});
