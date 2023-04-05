import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { 
  Routes, 
  Route,
 } from "react-router-dom";
import "./App.css";
import Launch from "./pages/Launch"
import Dashboard from "./pages/Dashboard"

const url = '/graphql'

// process.env.NODE_ENV === 'development' ? '/graphql' : "PUT-DEPLOY-ROUTE-HERE";

const httpLink = createHttpLink({
 uri: url,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Execute the `authLink` middleware prior to making the request to our GraphQL API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Routes>
          <Route exact path="/" element={<Launch />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
      </>
    </ApolloProvider>
  );
}

export default App;
