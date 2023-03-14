import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                firstName
            }
        }
    }
`;

export const REGISTER_USER = gql`
    mutation register(firstName: String!, lastName: String!, username: String!, email: String, password: String!) {
        login(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                email
            }
        }
    }
`;