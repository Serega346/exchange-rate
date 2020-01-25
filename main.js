var content = document.querySelector(".content");
var showName = document.querySelector(".name");
var showValue = document.querySelector(".value");
var showCost = document.querySelector(".cost");
var showDate = document.querySelector(".date");

var people = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", true);
  xhttp.responseType = 'json';
  xhttp.onload = function () {
    let status = xhttp.status;
    if (status == 200) {
      for (let name of xhttp.response) {
        showName.innerHTML += `<p>${name.txt}</p>`
      };
      for (let value of xhttp.response) {
        showValue.innerHTML += `<p>${value.cc}</p>`
      };
      for (let cost of xhttp.response) {
        showCost.innerHTML += `<p>${cost.rate}</p>`
      };
      for (let date of xhttp.response) {
        showDate.innerHTML += `<p>${date.exchangedate}</p>`
      };
    };
  };
  xhttp.send();
};

var show = function () {
  people();
};
