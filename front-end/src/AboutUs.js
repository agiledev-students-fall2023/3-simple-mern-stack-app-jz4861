import { Link } from 'react-router-dom'
import './AboutUs.css'
import axios from 'axios'


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>This is my Home Page!</h1>
      <p>I play tennis, badminton, League of Legends, Starcraft 2 and lots of other games.</p>
      <p>
        Check out the <Link to="/">home page</Link>.
      </p>
      <img src={ require('./fiora.jpg') } className="App-logo" alt=" " />


    </>
  )
}

// fetch some mock data about animals for sale

// extract the data from the server response
//const data = response.data
//console.log(data);

// a function that returns a Promise
// let doIt = () => {
//     return new Promise((resolve, reject) => {
//       const response = axios(
//         "http://localhost:7002/aboutus"
//         ) // imagine this function did an asynchronous task and then...
//       if (response) resolve("hooraah") // call the success callback function
//       else reject("boo!") // call the failure callback function
//     })
//   }
  
  // call the function, pass functions to handle its success or failure, whenever it completes
//   doIt()
//     .then(res => {
//       console.log(`Success: ${res}`)
//       //console.log(response)
//     })
//     .catch(err => {
//       console.log(`Failure: ${err}`)
//     })

// make this component available to be imported into any other file
export default AboutUs
