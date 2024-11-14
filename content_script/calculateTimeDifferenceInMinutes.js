function calculateTimeDifferenceInMinutes(date) {
  const openDate = new Date(date);
  const currentDate = new Date();

  const timeDifferenceInMilliseconds = Math.abs(currentDate - openDate);
  const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60);

  return timeDifferenceInMinutes;
}

export { calculateTimeDifferenceInMinutes };
