function displayCountries(...countries) {
  for (country of countries) {
    console.log(country);
  }
}

displayCountries("Ukraine", "Poland", "USA", "Canada", "Japan");

const currencies = ["UAH", "EUR", "DOGE", "LTC", "BTC"];
const [uah, eur, ...coins] = currencies;
console.log(uah, eur, coins);
