# Minutentag Beer — Server

This is the back-end server for the **Minutentag Beer** project. It provides a **GraphQL API** that serves beer product data and interacts with a database.

## 🔧 Technologies Used

- Node.js
- Express
- Apollo Server (GraphQL)
- MongoDB (or your preferred database)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or later)
- MongoDB running locally or accessible remotely

### Installation

```bash
git clone https://github.com/pedrojose06/minutentag-server
cd minutentag-server
npm install
```

### Running the Server

```bash
node src/index.js
```

The server will start on `http://localhost:4000`.

## 🔍 Using GraphQL Playground

Navigate to:

```
http://localhost:4000/graphql
```

You can test queries and mutations using the GraphQL Playground.

### Example Queries

#### Fetch all beers

```graphql
query ExampleQuery {
  getAllProducts {
    id
    brand
    image
    price
  }
}
```

## 🤝 Integration with Front-End

The front-end (Minutentag Beer) uses this server to fetch and manipulate beer data via GraphQL queries.

## 📄 License

This project is licensed under the MIT License.
