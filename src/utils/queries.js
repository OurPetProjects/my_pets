import { gql } from "@apollo/client";

// One pet
export const QUERY_ONE_PET = gql`
query findPet($petId: ID!) {
  pet(petId: $petId) {
    _id
    petName
    species
    age
    parentUsername
    notes
    tasks
  }
}
`;

// All pets
export const QUERY_ALL_PETS = gql `
query getPets{
  pet {
    _id
    petName
    species
    age
    parentUsername
    notes
    tasks
  }
} 
`;

// TODO: All user tasks
export const QUERY_TASKS = gql `
query getTasks

`;

// User
export const QUERY_USER = gql`
query user($username: String!) {
  user {
    _id
    firstName
    lastName
    location
    username
    email
    password
    pets {
      _id
      petName
      species
      age
      parentUsername
      notes
      tasks
    }
  }
}
`;