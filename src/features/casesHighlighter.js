import { calculateTimeDifferenceInMinutes, isValidDateFormat } from '../utils/dateUtils.js';

export class CaseHighlighter {
  highlightCase(row, minutes) {
    let color;
    if (minutes > 90) {
      color = "rgb(255, 220, 230)";
    } else if (minutes <= 90 && minutes > 60) {
      color = "rgb(255, 232, 184)";
    } else if (minutes <= 60 && minutes > 30) {
      color = "rgb(209, 247, 196)";
    } else if (minutes <= 30) {
      color = "rgb(194, 244, 233)";
    }
    row.style.backgroundColor = color;
  }

  hasOpenStatus(rowElement) {
    const statusElements = rowElement.querySelectorAll("td span span");
    let isOpenFound = false;
    let isReopenedFound = false;

    statusElements.forEach(element => {
      const textContent = element.textContent.trim();
      if (textContent === "Open") isOpenFound = true;
      if (textContent === "Re-opened") isReopenedFound = true;
    });

    return isOpenFound && !isReopenedFound;
  }

  handleCases() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const rows = table.querySelector('tbody')?.querySelectorAll('tr') || [];
      rows.forEach(row => {
        if (this.hasOpenStatus(row)) {
          const dates = this.extractDates(row);
          if (dates.length > 0) {
            const earliestDate = this.getEarliestDate(dates);
            const minutes = calculateTimeDifferenceInMinutes(earliestDate);
            this.highlightCase(row, minutes);
          }
        }
      });
    });
  }
}