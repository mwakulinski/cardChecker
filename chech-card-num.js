const Validation = require("./Validation");

module.exports = (cardNumber) => {
  Validation.throwIfNotStirngOrNumber(cardNumber);
  if (typeof cardNumber !== "string") {
    chechIfOnlyNumbers(cardNumber);
    return cardNumber;
  }

  const onlyDigitsCardNumber = extractCardNumber(cardNumber);
  chechIfOnlyNumbers(onlyDigitsCardNumber);
  return onlyDigitsCardNumber;
};

const extractCardNumber = (cardNumberWithSymbols) => {
  const connectorRegExp = /[-_ ]/g;
  return cardNumberWithSymbols.replaceAll(connectorRegExp, "");
};

const chechIfOnlyNumbers = (cardNumber) => {
  const notDigitRegExp = /\D/g;
  if (notDigitRegExp.test(cardNumber)) {
    throw new Error("Card number must consist only of: digits 0-9");
  }
};
