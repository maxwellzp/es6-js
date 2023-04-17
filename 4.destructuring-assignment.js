const stock = {
  name: "Tesla, Inc.",
  code: "TSLA",
  currentPrice: 185.0,
  currency: "USD",
  statistics: {
    marketCap: 592.0,
    enterpriseValue: 575.56,
  },
};

const { name, currentPrice: price } = stock;
console.log(name, price);

const {
  marketCap,
  enterpriseValue: value,
  data = "default data",
} = stock.statistics;
console.log(marketCap, value, data);

const stocks = ["AMZN", "AAPL", "META", "GOOG", "NFLX"];
const [amazon, apple, ...otherStocks] = stocks;
console.log(amazon, apple, otherStocks);

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(`x: ${x} | y: ${y}`);
