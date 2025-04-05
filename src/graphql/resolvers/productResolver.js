import products from '../../data/products.js';
import stockPrices from '../../data/stock-price.js';

export const productResolver = {
    Query: {
        getProduct: (_, { id }) => {
            const product = products.find((product) => product.id === Number.parseInt(id));
            if (!product) return null;

            const skusWithPrices = product.skus.map((sku) => ({
                ...sku,
                price: stockPrices[sku.code]?.price || null,
                stock: stockPrices[sku.code]?.stock || null,
                name: sku.name,
            }));

            const cheapestPrice = skusWithPrices
                .filter((sku) => sku.price !== null)
                .reduce((min, sku) => (sku.price < min ? sku.price/100 : min/100), Number.POSITIVE_INFINITY);

            return {
                ...product,
                price: cheapestPrice === Number.POSITIVE_INFINITY ? null : cheapestPrice/100, 
                skus: skusWithPrices,
            };
        },
        getAllProducts: () => {
            return products.map((product) => {
                const skusWithPrices = product.skus.map((sku) => ({
                    ...sku,
                    price: stockPrices[sku.code]?.price || null, 
                }));

                const cheapestPrice = skusWithPrices
                    .filter((sku) => sku.price !== null)
                    .reduce((min, sku) => (sku.price < min ? sku.price : min), Number.POSITIVE_INFINITY);

                return {
                    ...product,
                    price: cheapestPrice === Number.POSITIVE_INFINITY ? null : cheapestPrice/100,
                    skus: skusWithPrices,
                };
            });
        },
    },
};