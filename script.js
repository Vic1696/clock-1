function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    var appendHrs = document.getElementById('hours');
    var appendMin = document.getElementById('minutes');
    var appendSec = document.getElementById('seconds');

    (hrs => 1200) ? session.innerHTML = "PM ": session.innerhtml = "AM";

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    appendHrs.innerHTML = hrs;
    appendMin.innerHTML = min;
    appendSec.innerHTML = sec;
}
setInterval(displayTime, 10);