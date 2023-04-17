const crypto = ["LTC", "BTC", "XRP"];
const fiat = ["USD", "UAH", "EUR"];

const currencies = [...crypto, "CAD", ...fiat, "GBP"];
console.log(currencies);

const currenciesCopy = [...currencies];
currenciesCopy[0] = "AUD";
console.log(currenciesCopy);

const coinName = "Bitcoin";
const symbols = [...coinName];
console.log(symbols);

function dislayFiat(usd, uah, eur) {
  console.log(`${usd} / ${uah} / ${eur}`);
}
dislayFiat(...fiat);
