setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hours = time.getHours();
    let minuits = time.getMinutes();
    let seconds = time.getSeconds();
    am_pm = '';
    if (hours >= 12) {
        if (hours > 12) {
            hours -= 12
        };

        am_pm = 'PM';
    }
    else if (hours === 0) {
        am_pm = 'AM';
    }
    hours = hours < 10 ? "0" + hours : hours;
    minuits = minuits < 10 ? "0" + minuits : minuits;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hours + ":" + minuits + ":" + seconds + am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime()