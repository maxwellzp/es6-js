import pkg from "lodash";
const { uniq } = pkg;
import axios from "axios";
//import API_KEY from "./src/constants"; // Default export
import displayMessage, {
  API_KEY,
  countries,
  tooLongNameOfTheVariable as newName,
} from "./src/storage"; //Named export

const numbers = [1, 2, 3, 3, 1, 5, 8, 9, 2, 1];
console.log(uniq(numbers));

console.log(`API-KEY: ${API_KEY}`);

for (const country of countries) {
  console.log(country);
}

console.log(`New name: ${newName}`);

displayMessage("test message");
