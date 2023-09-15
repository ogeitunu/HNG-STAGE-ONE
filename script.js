// Get the HTML elements
const elementCurrentDay = document.querySelector("#currentDayOfTheWeek");
const elementCurrentUTCTime = document.querySelector("#currentUTCTime");

// Create a Date object for the current date and time
const currentDate = new Date();

// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const currentDayOfTheWeek = daysOfWeek[currentDate.getDay()];
    return currentDayOfTheWeek;
}

// Set the text content of elementCurrentDay to the current day of the week
elementCurrentDay.textContent = getCurrentDayOfTheWeek();

// Update the current UTC time every second
setInterval(() => {
    const currentDate = new Date();
    const currentUTCTime = currentDate.getTime();

    // Set the text content of elementCurrentUTCTime to the current UTC time
    elementCurrentUTCTime.textContent = currentUTCTime;
}, 1000);
