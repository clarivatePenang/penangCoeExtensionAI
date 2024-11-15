import { getStatusColor, generateStyle } from '../utils/colorUtils.js';

export class StatusHighlighter {
  handleStatus() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const rows = table.querySelector('tbody')?.querySelectorAll('tr') || [];
      rows.forEach(row => {
        const cells = row.querySelectorAll('td span span');
        cells.forEach(cell => {
          const status = cell.textContent.trim();
          const color = getStatusColor(status);
          if (color) {
            cell.setAttribute("style", generateStyle(color));
          } else {
            cell.removeAttribute("style");
          }
        });
      });
    });
  }
}
