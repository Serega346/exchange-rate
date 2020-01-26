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

       showName.innerHTML = '';
       showCost.innerHTML = '';
       showValue.innerHTML = '';
       showDate.innerHTML = '';

     for (var property in xhttp.response) {

      showName.innerHTML += `<p>${xhttp.response[property].txt}</p>`;
      showValue.innerHTML += `<p>${xhttp.response[property].cc}</p>`;
      showCost.innerHTML += `<p>${xhttp.response[property].rate}</p>`;
      showDate.innerHTML += `<p>${xhttp.response[property].exchangedate}</p>`;

    }

  };
  
};

  xhttp.send();

};

var show = function () {

  people();

};
