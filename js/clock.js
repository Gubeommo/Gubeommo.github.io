const clock = document.querySelector("h2#clock");



function getDate(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seceonds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = (`${`&#8986`} ${hour}:${minutes}:${seceonds}`);
}

getDate();

setInterval(getDate, 1000);