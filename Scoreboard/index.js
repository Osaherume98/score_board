let homeCount = 0;
let changeCount = document.getElementById("home-btn");

function plusone() {
  homeCount += 1;
  changeCount.textContent = homeCount;
}
function plustwo() {
  homeCount += 2;
  changeCount.textContent = homeCount;
}
function plusthree() {
  homeCount += 3;
  changeCount.textContent = homeCount;
}

let guestCount = 0;
let guestCountChange = document.getElementById("guest-btn");

function guestPlusone() {
  guestCount += 1;
  guestCountChange.textContent = guestCount;
}
function guestPlustwo() {
  guestCount += 2;
  guestCountChange.textContent = guestCount;
}
function guestPlusthree() {
  guestCount += 3;
  guestCountChange.textContent = guestCount;
}

let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home-count");
let domGuest = document.getElementById("guest-count");

function saveClick() {
  saveCountHome = homeCount + "--";
  domHome.textContent += saveCountHome;

  saveCountGuest = guestCount + "--";
  domGuest.textContent += saveCountGuest;

  changeCount.textContent = 0;
  homeCount = 0;
  guestCountChange.textContent = 0;
  guestCount = 0;
}
