function getEarlierDate(date1Str, date2Str) {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  if (date1 < date2) {
    return date1;
  } else {
    return date2;
  }
}
