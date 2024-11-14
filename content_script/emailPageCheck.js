function emailPageCheck() {
  let h1Elements = document.getElementsByTagName('h1');

  let result = false;

  for (let h1Element of h1Elements) {
    if (h1Element.className == 'pageType' && h1Element.textContent == 'Email Message:') {
      result = true;
      break;
    }
  }

  console.log(result);

  return result;
}

function changeS1AnchorBackgroundColor() {

  var selectEmailElement = document.querySelector('select#p26');

  if (selectEmailElement.selectedIndex === 0) {
    selectEmailElement.style.backgroundColor = "#ff9eb6";
    console.log('color changed to red');
  } else if (selectEmailElement.selectedIndex === 11) {
    selectEmailElement.style.backgroundColor = "";
    console.log('color changed to normal');
  } else {
    selectEmailElement.style.backgroundColor = "#ffd676";
    console.log('color changed to orange');
  }

}
