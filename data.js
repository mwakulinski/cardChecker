//AmericanExpress iin 37,38; length: 15
//Visa: iin 4 (and is not other iin); length 13,16
//MasterCard: iin 2221–2720, 51–55; length 16
//Discover: iin 6011, 644-649, 65, 622126–622925;  length 16-19
// Source: https://en.wikipedia.org/wiki/Payment_card_number

const generateRange = (min, max) => {
  return Array.from({ length: max + 1 - min }, (element, index) => index + min);
};

module.exports = [
  { name: "American Express", iin: [37, 38] },
  { name: "Visa", iin: [4] },
  {
    name: "MasterCard",
    iin: [...generateRange(51, 55), ...generateRange(2221, 2720)],
  },
  {
    name: "Discover",
    iin: [
      6011,
      65,
      ...generateRange(644, 649),
      ...generateRange(622126, 622925),
    ],
  },
];
