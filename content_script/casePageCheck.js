function casePageCheck() {
  let h1Elements = document.getElementsByTagName('h1');

  let result = false;

  for (let h1Element of h1Elements) {
    if (h1Element.className == 'pageType' && h1Element.textContent.includes('Case')) {
      result = true;
      break;
    }
  }

  return result;
}
