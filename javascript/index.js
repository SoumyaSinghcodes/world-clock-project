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

//MO

setInterval(function () {
  let MOElement = document.querySelector("#MO");
  let MODateElement = MOElement.querySelector(".date");
  let MOTimeElement = MOElement.querySelector(".time");
  let MOTime = moment().tz("Europe/Moscow");

  MODateElement.innerHTML = MOTime.format("MMMM Do YYYY");
  MOTimeElement.innerHTML = MOTime.format("h:mm:ss  [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
     <div>
       <h2>${cityTimeZone}</h2>
       <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
  `;
}

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", updateCity);
