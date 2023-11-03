const navBtn = document.querySelector("#nav-btn");
const navEl = document.querySelector("nav");
const dateEl = document.querySelector("#header-date");
const footerEl = document.querySelector("#footer-year")
const modEl = document.querySelector(".last-modification");
const banner = document.querySelector(".banner");
const visitString = document.querySelector("#visit-string");
const hiddenInput = document.querySelector("#curtime");
const removeBannerbtn = document.querySelector("#hex");
const curDate = new Date();


// Last Visit
let count = 1;
let dayText;
const today = Math.floor(curDate/8.64e7);
const formerday = Number(localStorage.getItem("lastDay"));
const daydiff = today - formerday

dayText = `${Math.round(daydiff)} days ago | Visit count:${localStorage.getItem("count")}`
visitString.textContent = dayText;




const now = Math.floor(curDate/8.64e7);
localStorage.setItem("lastDay", now);
count = localStorage.getItem("count");
count++
localStorage.setItem("count", count);



const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const newDate = new Date(document.lastModified).toLocaleDateString("en-UK", options);

document.querySelector('#lastModified').innerHTML = `Last modification: ${newDate}`;

const copyright = document.querySelector('#copyright');

copyright.innerHTML = "&copy 2023";

