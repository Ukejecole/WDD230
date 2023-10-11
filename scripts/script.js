// Fill up Footer
const curDate = new Date();
const year = curDate.getFullYear();
let lastModifiedDate = new Date(document.lastModified);

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds();
let modhour = lastModifiedDate.getHours(); 

footerHead.insertAdjacentHTML("afterbegin", `&#169 ${year} | Ukeje Cole | Nigeria`);
foooterP.insertAdjacentHTML("afterbegin", `Last Updated: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond} `)