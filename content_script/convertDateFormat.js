function convertDateFormat(inputDate) {
  const [datePart, timePart, isAmPm] = inputDate.split(' ');
  const [firstDatePart, secondDatePart, year] = datePart.split('/');

  const currentDayOfMonth = getDayOfMonth();
  const currentMonth = getCurrentMonth();

  let day, month;

  if ((firstDatePart == currentDayOfMonth) && (secondDatePart == currentMonth)) {
    day = firstDatePart;
    month = secondDatePart;
  } else if ((firstDatePart == currentMonth) && (secondDatePart == currentDayOfMonth)) {
    day = secondDatePart;
    month = firstDatePart;
  } else if ((firstDatePart > 12) && (secondDatePart <= 12)) {
    day = firstDatePart;
    month = secondDatePart;
  } else if ((firstDatePart <= 12) && (secondDatePart > 12)) {
    day = secondDatePart;
    month = firstDatePart;
  } else if ((firstDatePart > currentMonth) && (secondDatePart <= 12)) {
    day = firstDatePart;
    month = secondDatePart;
  } else if ((secondDatePart > currentMonth) && (firstDatePart <= 12)) {
    day = secondDatePart;
    month = firstDatePart;
  } else {
    month = firstDatePart;
    day = secondDatePart;
  }

  const outputDate = `${month}/${day}/${year} ${timePart} ${isAmPm}`;
  return outputDate;
}

function convertDateFormat2(inputDate) {
  const [datePart, timePart, isAmPm] = inputDate.split(' ');
  const [day, month, year] = datePart.split('/');

  const outputDate = `${month}/${day}/${year} ${timePart} ${isAmPm}`;
  return outputDate;
}

function convertDateFormatDDMMwithAMPM(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('/').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  const date = new Date(year, month - 1, day, hours, minutes);

  const hours12 = date.getHours() % 12 || 12;
  const amPm = date.getHours() < 12 ? 'AM' : 'PM';

  return `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}/${year} ${String(hours12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amPm}`;
}

function convertDateFormatMMDDwithAMPM(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [month, day, year] = datePart.split('/');
  const [hours, minutes] = timePart.split(':');

  const date = new Date(year, month - 1, day, hours, minutes);

  const formattedDate = date.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return formattedDate;
}

function getDayOfMonth() {
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  return dayOfMonth;
}

function getCurrentMonth() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  return month;
}

function getCurrentYear() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return year;
}
