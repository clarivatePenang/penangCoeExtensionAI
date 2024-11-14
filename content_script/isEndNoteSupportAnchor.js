function isEndNoteSupportAnchor(anchor) {
  let desiredText = desiredTextSelection || emailEndNote;

  // Check if desiredText is an array
  if (Array.isArray(desiredText)) {
    // Loop through each item in the array
    for (let item of desiredText) {
      if (anchor.textContent.includes(item)) {
        return true;  // Return true if any item is included in the anchor's textContent
      }
    }
    return false;  // Return false if none of the items are included
  } else {
    // If desiredText is not an array, proceed as before
    return anchor.textContent.includes(desiredText);
  }
}
