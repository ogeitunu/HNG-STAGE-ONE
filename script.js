function updateDateAndTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.getTime();

    document.querySelector( 
        '[data-testid="currentDayOfTheWeek"]') .textContent = `{currentDay}`;
        document.querySelector('[data-testid="currentUTCTime "]').textContent = `${currentUTCTime}`;
}

// update time and date every second
setInterval(updateDateAndTime, 1000);
