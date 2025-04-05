import { stockPriceResolver } from './stockPriceResolver.js';
import { productResolver } from './productResolver.js';

export const resolvers = {
    Query: {
        ...stockPriceResolver.Query,
        ...productResolver.Query,
    },
};