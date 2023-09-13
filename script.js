const elementCurrenctDay = document.querySelector("#currentDayOfTheWeek")
const elementCurrentUTCTime = document.querySelector("#currentUTCTime");

const currentDate = new Date();

function getCurrentDayOfTheWeek() {
    const daysOfWeek = ["Sunday", 
"Monday", "Tuesday", "Wednesday", 
"Thursaday", "Friday", "Saturday"];
    const currentDayOfTheWeek = daysOfWeek[currentDate.getDay()];
    return currentDayOfTheWeek;
}

elementCurrenctDay.textContent = getCurrentDayOfTheWeek();

setInterval(() => {
    const currentDate = new Date();
    const currentUTCTime = currentDate.getTime();

    elementCurrentUTCTime.textContent = currentUTCTime
    
}, 1000);