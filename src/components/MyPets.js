// ! Imports
// Apollo
import { useQuery } from "@apollo/client"
// Data
import { QUERY_ALL_PETS } from "../utils/queries"

// ! Function
export default function MyPets() {
    
  // * Get all pets
  const { loading, error, data } = useQuery(QUERY_ALL_PETS);
  
  // Define error and loading
  console.error(JSON.stringify(error, null, 2));
  if(loading) {
    return <p>Loading...</p>
  }
  
  // Confirm data exists
  if(data) {
    console.log('this is data', data);
  }
console.log('test')
  // ** RETURN **
  return (
        <>
        <h1> My Pets!</h1>
        <p>These are your pets: </p>
        </>
    )
}