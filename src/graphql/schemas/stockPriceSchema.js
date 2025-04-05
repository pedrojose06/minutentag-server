import { gql } from 'graphql-tag';

export const stockPriceSchema = gql`
    type StockPrice {
        code: ID!   
        stock: Int! 
        price: Int!     
    }

    type Query {
        getStockPrice(code: ID!): StockPrice
        getAllStockPrices: [StockPrice!]!   
    }
`;