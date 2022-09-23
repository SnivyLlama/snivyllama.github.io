var bar = document.getElementById("whyrureadingthis");
var text = document.getElementById("whyrureadingthistext");
var date = document.getElementById("whyureadingthisdate");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var quad = document.getElementById("quad");
const lifespan = 2486372248080;

function update() {
    if (date.value == "") {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = "nonexistant!";
    } else {
        let ts = new Date(date.value).getTime();
    let percent = (Date.now() - ts) / lifespan * 100;
    if (percent < 0) {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = "nonexistant! (or just very lucky!)";
    } else if (percent > 100) {
        bar.setAttribute("width", "99.8%");
        text.innerHTML = "nonexistant!";
    } else {
        text.innerHTML = `${percent.toFixed(8)}% done!`;
        bar.setAttribute("width", (percent * 0.998) + "%");
    }
    }
    if (a.value && b.value && c.value) {
        let sqt = b.value ** 2 + (-4 * a.value * c.value);
        if (sqt < 0) {
            quad.innerHTML = "Non-real answer!";
            return;
        } else if (a.value == 0) {
            quad.innerHTML = "A cannot equal 0!";
            return;
        }
        let anspos = (-b.value + Math.sqrt(sqt)) / (2 * a.value);
        let ansneg = (-b.value - Math.sqrt(sqt)) / (2 * a.value);
        if (anspos == ansneg) {
            quad.innerHTML = `A zero of ${anspos} was found!`;
        } else {
            quad.innerHTML = `Two zeros of ${anspos} and ${ansneg} were found!`;
        }
    }
}

setInterval(update, 50);