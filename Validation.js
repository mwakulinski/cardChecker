class Validation {
  static throwIfNotStirngOrNumber(input) {
    if (!input || (typeof input !== "string" && typeof input !== "number")) {
      throw new Error(
        "Card number must be provided in string or number format"
      );
    }
  }

  static throwIfNotArray(input) {
    if (!input || !Array.isArray(input)) {
      throw new Error("Please provide array data type");
    }
  }
}

module.exports = Validation;
