function scholarOneStatusColors(statusText) {
  if (statusText === "New" || statusText === "Assigned" || statusText === "Failed QA") {
    return "rgb(191, 39, 75)";
  } else if (statusText === "Waiting" || statusText === "Updated") {
    return "rgb(247, 114, 56)";
  } else if (statusText === "Escalated" || statusText === "On Hold" || statusText === "Pending Approval" || statusText === "Pending QA Review") {
    return "rgb(140, 77, 253)";
  } else if (statusText === "Released" || statusText === "Passed QA" || statusText === "Closed") {
    return "rgb(45, 200, 64)";
  } else if (statusText === "Ready for QA" || statusText === "Ready for DBA" || statusText === "Ready for Data Architect") {
    return "rgb(251, 178, 22)";
  }
}

export { scholarOneStatusColors };
