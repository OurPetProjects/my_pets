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
    mutation register($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
        register(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
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

// export const editTask = gql`
//     mutation editTask($petId: ID!, $task: String) {
//         editTask(petId: $petId, task: $task) {
//             parentUsername
//             petName
//             tasks
//         }
//     }
// `;

// export const editPet = gql`
//     mutation editPet(petId: ID!, $petName: String, $species: String, $age: Int, $parentUsername: String, $notes: String) {
//         editPet(petId: $petId, petName: $petName, species: $species, age: $age, parentUsername: $parentUsername, notes: $notes) {
//             _id
//             petName
//             species
//             age
//             parentUsername
//             notes
//             tasks
//         }
//     }
// `;

// export const deleteTask = gql`
//     mutation deleteTask($petId: ID!, $task: String) {
//         deleteTask(petId: $petId, task: $task) {
//             _id
//             parentUsername
//             petName
//             tasks
//         }
//     }
// `;

// export const deletePet = gql`
//     mutation deletePet($petId: ID!) {
//         deletePet(petId: $petId) {
//             _id
//             parentUsername
//             petName
//         }
//     }
// `;

// export const createPet = gql`
//     mutation createPet($petName: String!, $species: String!, $age: Int!, $parentUsername: String!) {
//         createPet(petName: $petName, species: $species, age: $age, parentUsername: $parentUsername) {
//             _id
//             parentUsername
//             petName
//             species
//             age
//             notes
//         }
//     }
// `;

// export const addTask = gql`
//     mutation addTask($petId: ID!, $task: String) {
//         addTask(petId: $petId, task: $task) {
//             parentUsername
//             petName
//             tasks
//         }
//     }
// `;
