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
        progress.innerHTML = `School is ${percent.toFixed(4)}% done!`;
        bar.setAttribute("width", (percent * 0.998).toString() + "%");
    }
}

setInterval(update, 50)