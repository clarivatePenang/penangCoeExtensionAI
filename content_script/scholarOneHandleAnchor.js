function scholarOneHandleAnchor() {
  if (emailPageCheck()) {

    // runs the backgroundcolourchange for ScholarOne SFDC once initially.
    changeS1AnchorBackgroundColor();

    document.querySelector('select#p26').addEventListener('change', function () {
      changeS1AnchorBackgroundColor();
      console.log('The selected option has changed.');

    });
  }
}
