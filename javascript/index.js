setInterval(function () {
  //LA

  let LAElement = document.querySelector("#LA");
  let LADateElement = LAElement.querySelector(".date");
  let LATimeElement = LAElement.querySelector(".time");
  let LATime = moment().tz("America/Los_Angeles");

  LADateElement.innerHTML = LATime.format("MMMM Do YYYY");
  LATimeElement.innerHTML = LATime.format("h:mm:ss  [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  //PA

  let SYElement = document.querySelector("#SY");
  let SYDateElement = SYElement.querySelector(".date");
  let SYTimeElement = SYElement.querySelector(".time");
  let SYTime = moment().tz("Australia/Sydney");

  SYDateElement.innerHTML = SYTime.format("MMMM Do YYYY");
  SYTimeElement.innerHTML = SYTime.format("h:mm:ss  [<small>]A[</small>]");
}, 1000);
