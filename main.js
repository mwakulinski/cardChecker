//AmericanExpress iin 37,38; length: 15
//Visa: iin 4 (and is not other iin); length 13,16
//MasterCard: iin 2221–2720, 51–55; length 16
//Discover: iin 6011, 644-649, 65, 622126–622925;  length 16-19

// American Express: 3111-1111-1111-1113
// Visa: 4111-1111-1111-1111
// MasterCard: 5111-1111-1111-1118
// Discover: 6111-1111-1111-1116

const data = require("./data");
const validateWithLuhna = require("./luhna-validation");
const findBankName = require("./find-bank-name");
const checkCardNum = require("./chech-card-num");

const checkCard = (cardNumber) => {
  const checkedCardNum = checkCardNum(cardNumber);
  return [
    validateWithLuhna(checkedCardNum),
    findBankName(data, checkedCardNum),
  ];
};

console.log(checkCard("3781-1111-1111-1113"));
console.log(checkCard("4111 1111 1111 1111   "));
console.log(checkCard("5421_1111_1111_1118"));
console.log(checkCard(6011111111111116));
