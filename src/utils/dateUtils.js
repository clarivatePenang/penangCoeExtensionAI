export function getEarlierDate(date1Str, date2Str) {
    const date1 = new Date(date1Str);
    const date2 = new Date(date2Str);
    return date1 < date2 ? date1 : date2;
  }
  
  export function calculateTimeDifferenceInMinutes(date) {
    const openDate = new Date(date);
    const currentDate = new Date();
    const timeDifferenceInMilliseconds = Math.abs(currentDate - openDate);
    return timeDifferenceInMilliseconds / (1000 * 60);
  }
  
  export function isValidDateFormat(textContent) {
    const datePattern = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/\d{4} (1[0-2]|0?[1-9]):([0-5][0-9]) (AM|PM)$/;
    return datePattern.test(textContent);
  }

  // ... other date utility functions