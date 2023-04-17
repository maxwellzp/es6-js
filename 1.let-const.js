const v1 = 10;
let v2 = 20;
const country = {
  name: "Ukraine",
  capital: "Kyiv",
};
country.name = "---Ukraine---";
console.log(v1, v2, country);

Object.freeze(country);
country.name = "Ukraine";
console.log(country);
