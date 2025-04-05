import stockPrices from '../../data/stock-price.js';

export const stockPriceResolver = {
    Query: {
        getStockPrice: (_, { code }) => {
            return stockPrices[code]
                ? { code, ...stockPrices[code] }
                : null;
        },
        getAllStockPrices: () => {
            return Object.entries(stockPrices).map(([code, data]) => ({
                code,
                ...data,
            }));
        },
    },
};