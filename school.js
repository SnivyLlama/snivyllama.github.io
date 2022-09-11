var progress = document.getElementById("progress")
var bar = document.getElementById("bar")

function minutes(date) {
    return date.getUTCHours() * 60 + date.getUTCMinutes();
}

function acc(date) {
    return minutes(date) + date.getUTCSeconds() / 60 + date.getUTCMilliseconds() / 60000;
}

function update() {
    let now = new Date();
    if (now.getUTCDay() % 6 == 0 || minutes(now) < 800 || minutes(now) >= 1200) {
        progress.innerHTML = "School is not in session at this time!";
        bar.setAttribute("width", "99.8%");
    } else {
        let percent = (acc(now) - 800) / 4;
        let mins = 400 - (minutes(now) - 800);
        progress.innerHTML = `School is ${percent.toFixed(4)}% done! Only ${Math.floor(mins/60) > 0 ? Math.floor(mins/60) + (Math.floor(mins/60) == 1 ? " hour" : " hours") : ""}${Math.floor(mins/60) > 0 && mins % 60 > 0 ? " and " : ""}${mins % 60 > 0 ? mins % 60 + (mins % 60 == 1 ? " minute left" : " minutes left") : ""}!`;
        bar.setAttribute("width", (percent * 0.998) + "%");
    }
}

setInterval(update, 50)