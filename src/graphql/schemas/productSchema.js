import { gql } from 'graphql-tag';

export const productSchema = gql`
    type SKU {
        code: String!
        name: String!
        price: Int!
        stock: Int!
    }

    type Product {
        id: ID!
        brand: String!
        image: String!
        style: String!
        substyle: String!
        abv: String!
        origin: String!
        information: String!
        skus: [SKU!]!
        price: Float 
    }

    type Query {
        getProduct(id: ID!): Product
        getAllProducts: [Product!]!
    }
`;