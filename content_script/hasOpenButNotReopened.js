function hasOpenButNotReopened(rowElement) {
  const statusElements = rowElement.querySelectorAll("td span span");
  let isOpenFound = false;
  let isReopenedFound = false;

  statusElements.forEach(element => {
    const textContent = element.textContent.trim();

    if (textContent === "Open") {
      isOpenFound = true;
    } else if (textContent === "Re-opened") {
      isReopenedFound = true;
    } else if (textContent === "New") {
      return true;
    }
  });

  if (isOpenFound && !isReopenedFound) {
    return true
  } else {
    return false;
  }
}
