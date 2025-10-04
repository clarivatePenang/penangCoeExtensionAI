function divElementChangerScholarOne() {
  // Get all div elements in the document
  var divElements = document.getElementsByTagName("div");

  // Loop through all div elements
  for (var i = 0; i < divElements.length; i++) {
    // If the id of the current div element contains "CASES_STATUS"

    if (divElements[i].id.includes("CASES_STATUS")) {
      // Create a new span element
      console.log(i);
      var span = document.createElement("span");
      console.log(divElements[i].textContent.trim());


      // Set the style of the span element
      span.style.backgroundColor = scholarOneStatusColors(divElements[i].textContent.trim());
      span.style.borderRadius = "6px";
      span.style.padding = "3px 6px";
      span.style.color = "white";
      span.style.fontWeight = "500";

      // Set the text of the span element to the current text of the div element
      span.textContent = divElements[i].textContent.trim();

      // Clear the current content of the div element
      divElements[i].textContent = "";

      // Append the span element to the div element
      divElements[i].appendChild(span);
    }
  }
}
