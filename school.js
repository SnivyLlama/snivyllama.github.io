var progress = document.getElementById("progress");
var specific = document.getElementById("specific");
var lunch = document.getElementById("lunch");
var sdiv = document.getElementById("specific-div");
var ldiv = document.getElementById("lunch-div")
var obar = document.getElementById("overall-bar");
var sbar = document.getElementById("specific-bar");
var lbar = document.getElementById("lunch-bar");

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
        obar.setAttribute("width", "99.8%");
        sdiv.style.display = "none";
        ldiv.style.display = "none";
    } else {
        sdiv.style.display = "block";
        let percent = (acc(now) - 800) / 4;
        let amins = minutes(now) - 800
        let mins = 400 - amins;
        progress.innerHTML = `School is ${percent.toFixed(4)}% done! Only ${Math.floor(mins/60) > 0 ? Math.floor(mins/60) + (Math.floor(mins/60) == 1 ? " hour" : " hours") : ""}${Math.floor(mins/60) > 0 && mins % 60 > 0 ? " and " : ""}${mins % 60 > 0 ? mins % 60 + (mins % 60 == 1 ? " minute left" : " minutes left") : ""}!`;
        obar.setAttribute("width", (percent * 0.998) + "%");
        if (amins < 86) {
            percent = (acc(now) - 800) / .86;
            mins = 86 - amins;
            specific.innerHTML = `Block 1 is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 86 && amins < 94) {
            percent = (acc(now) - 886) / .08;
            mins = 94 - amins;
            specific.innerHTML = `Passing Time is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 94 && amins < 180) {
            percent = (acc(now) - 894) / .86;
            mins = 180 - amins;
            specific.innerHTML = `Block 2 is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 180 && amins < 188) {
            percent = (acc(now) - 980) / .08;
            mins = 188 - amins;
            specific.innerHTML = `Passing Time is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 188 && amins < 306) {
            percent = (acc(now) - 988) / 1.18;
            mins = 306 - amins;
            specific.innerHTML = `Block 3 is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 306 && amins < 314) {
            percent = (acc(now) - 1106) / .08;
            mins = 314 - amins;
            specific.innerHTML = `Passing Time is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 314) {
            percent = (acc(now) - 1114) / .86;
            mins = 400 - amins;
            specific.innerHTML = `Block 4 is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            sbar.setAttribute("width", (percent * 0.998) + "%");
        }
        if (amins >= 180 && amins < 212) {
            ldiv.style.display = "block";
            percent = (acc(now) - 980) / .32;
            mins = 212 - amins;
            lunch.innerHTML = `Lunch A is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            lbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 213 && amins < 239) {
            ldiv.style.display = "block";
            percent = (acc(now) - 1013) / .26;
            mins = 239 - amins;
            lunch.innerHTML = `Lunch B is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            lbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 250 && amins < 277) {
            ldiv.style.display = "block";
            percent = (acc(now) - 1050) / .27;
            mins = 277 - amins;
            lunch.innerHTML = `Lunch C is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            lbar.setAttribute("width", (percent * 0.998) + "%");
        } else if (amins >= 277 && amins < 306) {
            ldiv.style.display = "block";
            percent = (acc(now) - 1077) / .29;
            mins = 306 - amins;
            lunch.innerHTML = `Lunch D is ${percent.toFixed(4)}% done! Only ${mins + (mins == 1 ? " minute" : " minutes")} left!`;
            lbar.setAttribute("width", (percent * 0.998) + "%");
        } else {
            ldiv.style.display = "none";
        }
    }
}

setInterval(update, 50);