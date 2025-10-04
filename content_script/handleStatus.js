function handleStatus() {
  let webTables = document.querySelectorAll('table');

  for (let table of webTables) {
    const rows = table.querySelector('tbody').querySelectorAll('tr');
    for (let row of rows) {
      let cells = row.querySelectorAll('td span span');
      for (let cell of cells) {
        let cellText = cell.textContent.trim();
        if (cellText === "New Email Received" || cellText === "Re-opened" || cellText === "Reopened" || cellText === "Completed by Resolver Group" || cellText === "New" || cellText === "Update Received") {
          cell.setAttribute("style", generateStyle("rgb(191, 39, 75)"));
        } else if (cellText === "Pending Action" || cellText === "Initial Response Sent" || cellText === "In Progress") {
          cell.setAttribute("style", generateStyle("rgb(247, 114, 56)"));
        } else if (cellText === "Assigned to Resolver Group" || cellText === "Pending Internal Response" || cellText === "Pending AM Response" || cellText === "Pending QA Review") {
          cell.setAttribute("style", generateStyle("rgb(140, 77, 253)"));
        } else if (cellText === "Solution Delivered to Customer") {
          cell.setAttribute("style", generateStyle("rgb(45, 200, 64)"));
        } else if (cellText === "Closed" || cellText === "Pending Customer Response") {
          cell.setAttribute("style", generateStyle("rgb(103, 103, 103)"));
        } else if (cellText === "Pending System Update - Defect" || cellText === "Pending System Update - Enhancement" || cellText === "Pending System Update - Other") {
          cell.setAttribute("style", generateStyle("rgb(251, 178, 22)"));
        } else {
          cell.removeAttribute("style");
        }
      }
    }
  }
}
