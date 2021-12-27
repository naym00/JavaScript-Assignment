/* Location Search Start */
let names = [];
    let sortedNames;
    let flag = 0;
    function lengthCheck() {
      let input_string = document.getElementById("input").value;
      let string_length = input_string.length;

      if (string_length >= 3) {
        fetch("https://www.vacationhomerentals.com/content/srp/saut?s=Las%20vegas" + input_string, {
          "method": "GET",
          "mode": "no-cors",
        }).then(function (response) {
          console.log(response)
        });
        autoSearch();
      }
      if (flag == 0) {
        const data = [
          { "id": 503358, "Name": "Province of Ragusa, Sicily, Italy", "Count": 51, "SlashName": "italy\/sicily\/province-of-ragusa-vacation-rentals\/g100503358" },
          { "id": 416298, "Name": "Jerusalem, Jerusalem District, Israel", "Count": 4, "SlashName": "Israel\/Jerusalem-vacation-rentals\/g2579\/" },
          { "id": 407700, "Name": "Jerusalem District, Israel", "Count": 4, "SlashName": "israel\/jerusalem-district-vacation-rentals\/g100407700" },
          { "id": 686343, "Name": "Marausa, Trapani, Italy", "Count": 2, "SlashName": "sicily\/province-of-trapani\/trapani\/marausa-vacation-rentals\/g100686343" },
          { "id": 414003, "Name": "Husafell, West Region, Iceland", "Count": 2, "SlashName": "iceland\/west-region\/husafell-vacation-rentals\/g100414003" },
          { "id": 414006, "Name": "Husavik, Northeast Region, Iceland", "Count": 2, "SlashName": "iceland\/northeast-region\/husavik-vacation-rentals\/g100414006" },
          { "id": 574074, "Name": "Llanddeusant, Anglesey, United Kingdom", "Count": 1, "SlashName": "wales\/north-wales\/anglesey\/llanddeusant-vacation-rentals\/g100574074" }
        ];
        const jsonObject = JSON.stringify(data);
        const jsObject = JSON.parse(jsonObject);
        for (x in jsObject) {
          names.push(jsObject[x].Name);
        }
        flag = 1;
        sortedNames = names.sort();
      }
    }

    let input = document.getElementById("input");
    function autoSearch() {
      input.addEventListener("keyup", (e) => {
        removeElements();
        for (let i of sortedNames) {
          if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
          ) {
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
          }
        }
      });
    }
    function displayNames(value) {
      input.value = value;
      removeElements();
    }
    function removeElements() {
      let items = document.querySelectorAll(".list-items");
      items.forEach((item) => {
        item.remove();
      });
    }
/* Location Search End */


/* Guest Counter Start */
function increment() {
    let current_guest = parseInt(document.getElementById("updateGuestInfo").innerText);
    if (current_guest<5)
    {
        let guestNumber = parseInt(document.getElementById("updateGuestInfo").innerText) + 1;
        document.getElementById("updateGuestInfo").innerHTML = guestNumber.toString();
    }
    else
    {
        window.alert("Sorry, Maximum 5 guests are allowed!");
    }
}

function decrement() {
    let current_guest = parseInt(document.getElementById("updateGuestInfo").innerText);
    if (current_guest >0)
    {
        let guestNumber = parseInt(document.getElementById("updateGuestInfo").innerText - 1);
        document.getElementById("updateGuestInfo").innerHTML = guestNumber.toString();
    }
    else
    {
        window.alert("Sorry You are trying to insert invalid guest number!");
    }
}
function show_guest_number()
{
    document.getElementById("guest_number").innerHTML = document.getElementById("updateGuestInfo").innerText + " Guests";
}
/* Guest Counter End */


/* Price Range Picker Start */
window.onload = function () {
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = "$" + sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = "$" + sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

function show_price_range()
{
    document.getElementById("dropdownMenuButton2").innerHTML = "$" + document.getElementById("slider-1").value + " - " + "$" + document.getElementById("slider-2").value;
}
/* Price Range Picker End */

/* popup Start */
function insertedValues() {
    let location = document.getElementById("input").value;
    let checkInValue = hdpkr.getValue().slice(0, 10);
    let checkOutValue = hdpkr.getValue().slice(13);

    let guest = document.getElementById("updateGuestInfo").innerText;
    let min_price = document.getElementById("slider-1").value;
    let max_price = document.getElementById("slider-2").value;

    
    document.getElementById("placeSearchValue").innerHTML=location;

    document.getElementById("checkInValue").innerHTML=checkInValue;
    document.getElementById("checkOutValue").innerHTML=checkOutValue;

    document.getElementById("guestsValue").innerHTML=guest;
    document.getElementById("priceRangeValue").innerHTML=min_price + " - " + max_price;
}
/* popup End */