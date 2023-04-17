export const API_KEY = "key"; // Named export

export const countries = ["Ukraine", "China", "India"]; // Named export

export const tooLongNameOfTheVariable = "example";

//const API_KEY = "key";
//export default API_KEY; // Default export

function displayMessage(msg) {
  console.log(`Here is the message: ${msg}`);
}

export default displayMessage;
