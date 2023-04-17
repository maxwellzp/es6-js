const closingPrice = 185.0;
const openingPrice = 184.0;
const gainPrice = 0.54;
const teslaCapitalization = 585.95;
const teslaShares = 3.16;
const post = `
On Friday 04/14/2023 the closing price of the Tesla share was $${closingPrice} on NAS. 
Compared to the opening price on Friday 04/14/2023 on NAS of $${openingPrice}, this 
is a gain of ${gainPrice}%. Tesla's market capitalization is $${teslaCapitalization} B 
by ${teslaShares} B shares outstanding.
`;
console.log(post);
