function scholarOneHandleStatus() {
  if (casePageCheck()) {

    console.log("main function started");

    // runs the backgroundcolourchange for ScholarOne SFDC once initially.
    divElementChangerScholarOne();

    document.querySelector("form").addEventListener('change', function () {

      console.log('The TABLE ELEMENT has changed.');

      divElementChangerScholarOne();



    });

    setTimeout(function () {
      // Your function goes here
      divElementChangerScholarOne();
      console.log("This function runs after 1 second");
    }, 1000);

    console.log("main function finished");
  }
}
