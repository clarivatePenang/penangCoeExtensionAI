function handleCases() {
  let webTables = document.querySelectorAll('table');

  for (let table of webTables) {
    const rows = table.querySelector('tbody').querySelectorAll('tr');
    for (let row of rows) {
      // check if the row has the term "Open" but not "Re-opened"
      if (hasOpenButNotReopened(row)) {
        const dateArray = [];
        const dateElements = row.querySelectorAll("td span span");

        // check if there's any textContent with the correct format, and push it to dateArray if it is
        dateElements.forEach(element => {
          const textContent = element.textContent;

          if (isValidDateFormat(textContent)) {
            // if the date format is MM/DD/YYYY, push it to dateArray
            const convertedDate = convertDateFormat(textContent);
            dateArray.push(convertedDate);
            //console.log('isValidDateFormat ONE has run')
          } else if (isValidDateFormat2(textContent)) {
            // if the date format is DD/MM/YYYY, convert it to MM/DD/YYYY and push it to dateArray
            const convertedDate = convertDateFormat2(textContent);
            dateArray.push(convertedDate);
            //console.log('isValidDateFormat2 TWO has run')
          } else if (isValidDateFormatDDMMnoAMPM(textContent)) {
            const addAMPM = convertDateFormatDDMMwithAMPM(textContent);
            // console.log(addAMPM);
            const convertedDate = convertDateFormat(addAMPM);
            dateArray.push(convertedDate);
          } else if (isValidDateFormatMMDDnoAMPM(textContent)) {
            const addAMPM = convertDateFormatMMDDwithAMPM(textContent);
            // console.log(addAMPM);
            const convertedDate = convertDateFormat(addAMPM);
          }
        });

        //check if the number of items in dateArray is 2 or 1, and assign earlierDate accordingly
        let earlierDate;
        //console.log(dateArray);

        if (dateArray.length === 2) {
          earlierDate = getEarlierDate(dateArray[0], dateArray[1]);
        } else if (dateArray.length === 1) {
          earlierDate = new Date(dateArray[0]);
        }

        // calculate the time difference in minutes
        const caseMinutes = calculateTimeDifferenceInMinutes(earlierDate);

        // highlight the row with different colors based on the time difference
        if (caseMinutes > 90) {
          highlightAnchorWithSpecificContent(row, "rgb(255, 220, 230)")
        } else if (caseMinutes <= 90 && caseMinutes > 60) {
          highlightAnchorWithSpecificContent(row, "rgb(255, 232, 184)")
        } else if (caseMinutes <= 60 && caseMinutes > 30) {
          highlightAnchorWithSpecificContent(row, "rgb(209, 247, 196)")
        } else if (caseMinutes <= 30) {
          highlightAnchorWithSpecificContent(row, "rgb(194, 244, 233)")
        }
      } else {
        unhighlightAnchor(row);
      }
    }
  }
}
