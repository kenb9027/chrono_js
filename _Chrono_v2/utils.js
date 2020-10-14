/**
 * Convert a number to string, by adding a zero before the given number if needed
 * @param {number} nb
 * @returns {string}
 *
 * @example addZero(32) => "32";
 * @example addZero(2) => "02";
 */
function addZero(nb) {
  if (nb < 10) {
    return "0" + nb;
  }

  return "" + nb;
}

/**
 * Convert a number to string, by adding as many zero as needed before the number
 *
 * @param {number|string} subject
 * @param {number} targetLength the length of the final string
 *
 * @returns {string} tha padded string
 */
function pad(subject, targetLength, padString) {
  var string;
  if (typeof subject === "string") {
    string = subject;
  } else if (typeof subject === "number") {
    string = "" + subject; // force la conversion
  } else {
    console.warn(
      "Attention subject est invalide, ca doit etre un nombre ou une chaine"
    );
  }

  if (typeof targetLength !== "number" || targetLength <= 0) {
    console.error(
      "Attention targetLength est invalide, ca doit etre un nombre positif"
    );
    return "";
  }

  if (typeof padString !== "string") {
    padString = " ";
  }

  while (string.length < targetLength) {
    string = padString + string;
  }

  return string;
}
