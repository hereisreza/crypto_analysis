//import * as res from "./db";
import {res} from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      return res(id);
    },
    users: (parent, args, context, info) => {
      return res(1);
    }
  }
};

export default resolvers;