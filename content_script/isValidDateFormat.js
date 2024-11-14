function isValidDateFormat(textContent) {
  const datePattern = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/\d{4} (1[0-2]|0?[1-9]):([0-5][0-9]) (AM|PM)$/;

  return datePattern.test(textContent);
}

function isValidDateFormat2(textContent) {
  const datePattern = /^(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/\d{4} (1[0-2]|0?[1-9]):([0-5][0-9]) (AM|PM)$/;

  return datePattern.test(textContent);
}

function isValidDateFormatDDMMnoAMPM(textContent) {
  const datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4} ([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

  return datePattern.test(textContent);
}

function isValidDateFormatMMDDnoAMPM(textContent) {
  const datePattern = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4} ([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return datePattern.test(textContent);
}
