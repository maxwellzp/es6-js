const cities = ["Kyiv", "Lviv", "Kharkov", "Odessa", "Nikolaev"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

console.log("**************************************************");

cities.forEach((city) => {
  console.log(city);
});

console.log("**************************************************");

for (const index in cities) {
  console.log(index);
}

console.log("**************************************************");

for (const city of cities) {
  console.log(city);
}

console.log("**************************************************");

const currency = {
  name: "United States dollar",
  code: "USD",
  sign: "$",
};

for (const field of Object.keys(currency)) {
  console.log(`field: ${field} | name: ${currency[field]}`);
}
