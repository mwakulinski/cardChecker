const Validation = require("./Validation");

module.exports = (objArr, cardNum) => {
  Validation.throwIfNotArray(objArr);

  return findCard(objArr, cardNum)?.name ?? "Other";
};

const findCard = (objArr, cardNum) => {
  return objArr.find((card) => {
    return findCardINN(card, cardNum);
  });
};

const findCardINN = (card, cardNum) => {
  const cardNumStr = cardNum.toString();
  return card.iin.some((prefix) => {
    const prefixStr = prefix.toString();
    return prefixStr === cardNumStr.slice(0, prefixStr.length);
  });
};
