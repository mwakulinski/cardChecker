//Luhna
// Sprawdzenie numeru karty płatniczej - algorytm:
// 1.    Obliczenia rozpoczynamy od liczby kontrolnej, która jest najbardziej na prawo i przesuwając się w lewo podwajamy co drugą cyfrę.
// 2.    Jeśli w wyniku podwojenia otrzymamy liczbę dwucyfrową, dodajemy do siebie cyfry otrzymując liczbę jednocyfrową np. 14 zapisujemy jako 5 (1+4)
// 3.    Dodajemy do siebie wszystkie cyfry, podwojone i niepodwojone.
// 4.    Jeśli suma mod 10 równa jest 0, numer jest prawidłowy.

module.exports = (cardNum) => {
  const cardNumAsNumber = parseInt(cardNum);
  const cardNumDigitsArr = changeToArr(cardNumAsNumber);
  const multipliedCardNumDigitArr =
    multiplyEverySecondDigitStartingBackwards(cardNumDigitsArr);
  const onedigitNumArr = sumDigitsIfOverNine(multipliedCardNumDigitArr);
  const summedDigitsNum = sumArrDigits(onedigitNumArr);
  return isDivisibleByTen(summedDigitsNum);
};

const isDivisibleByTen = (num) => {
  if (num % 10 === 0) {
    return true;
  }
  return false;
};

const sumArrDigits = (cardDigitArr) => {
  return cardDigitArr.reduce((total, current) => {
    return total + current;
  }, 0);
};

const sumDigitsIfOverNine = (cardDigitArr) => {
  return cardDigitArr.map((num) => {
    if (num > 9) {
      const numString = num.toString();
      const units = Number.parseInt(numString[0]);
      const tens = Number.parseInt(numString[1]);
      return units + tens;
    }
    return num;
  });
};

const multiplyEverySecondDigitStartingBackwards = (cardDigitArr) => {
  const reversedArray = reverseArray(cardDigitArr);
  return reversedArray.map((digit, index) => {
    if (index % 2 == 0) {
      return digit * 2;
    }
    return digit;
  });
};

const reverseArray = (cardDigitArr) => {
  return cardDigitArr.slice(0).reverse();
};

const changeToArr = (cardNum) => {
  return Array.from(cardNum, (digit) => Number.parseInt(digit));
};
