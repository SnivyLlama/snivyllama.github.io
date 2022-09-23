var bar = document.getElementById("whyrureadingthis");
var text = document.getElementById("whyrureadingthistext");
var date = document.getElementById("whyureadingthisdate");
const lifespan = 2486372248080;

function update() {
    if (date.value == "") {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = `nonexistant!`;
        return;
    }
    let ts = new Date(date.value).getTime();
    let percent = (Date.now() - ts) / lifespan * 100;
    if (percent < 0) {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = `nonexistant! (or just very lucky!)`;
        return;
    } else if (percent > 100) {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = `nonexistant!`;
        return;
    }
    text.innerHTML = `${percent.toFixed(8)}% done!`;
    bar.setAttribute("width", (percent * 0.998) + "%");
}

setInterval(update, 50);