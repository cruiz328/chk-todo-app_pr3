
   
import { gql } from '@apollo/client';

export const ADD_TODO = gql`
    mutation CreateUser($firstName: String!, $lastName: String!) {
        createUser(firstName: $firstName, lastName: $lastName) {
            _id
            firstName
            lastName
            fullName
        }
    }
`;