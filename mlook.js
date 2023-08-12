var data = [];

fetch("./current.txt").then(resp => resp.text()).then(text => {
    for (const user of text.split("/")) {
        if (user) {
            let split = user.split(",")
            data.push([split[0], split[1], parseInt(split[2], 16)]);
        }
    }
    document.querySelector(".loading").classList.replace("loading", "loaded");
});

document.querySelector("#look").addEventListener("click", e => {
    let users = e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    users.replaceChildren();
    let sensitivity = e.target.nextElementSibling.innerText === "Case Sensitive" ? false : true;
    let regex = e.target.nextElementSibling.nextElementSibling.innerText === "No Regex" ? false : true;
    if (e.target.previousElementSibling.value.length < 3) {
        alert("That string is too short! If you really want to do this, you can lengthen the query by using periods, which are wildcards in regex mode.");
        return;
    }
    let query;
    try {
        query = regex ? new RegExp(e.target.previousElementSibling.value, sensitivity ? "i" : "") : sensitivity ? e.target.previousElementSibling.value.toLowerCase() : e.target.previousElementSibling.value;
    } catch {
        alert("This is an invalid regular expression. I don't know what else to tell ya.");
        return;
    }
    for (const [id, name, join] of data) {
        if (regex ? name.match(query) : (sensitivity ? name.toLowerCase() : name).includes(query)) {
            let user = document.createElement("a");
            let sid = document.createElement("span")
            sid.innerText = id;
            sid.classList.add("id")
            user.appendChild(sid);
            let username = document.createElement("span");
            username.innerText = name;
            username.classList.add("name");
            user.appendChild(username);
            let created = document.createElement("span");
            created.innerText = new Date(join*1000).toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"}) + " @ " + new Date(join*1000).toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"});
            created.classList.add("join");
            user.appendChild(created);
            user.classList.add("user");
            user.href = `https://mafia.gg/api/users/${id}`;
            user.target = "_blank";
            users.appendChild(user);
        }
    }
});

document.querySelector("#sensitivity").addEventListener("click", e => {
    if (e.target.innerText === "Case Sensitive") e.target.innerText = "Case Insensitive";
    else e.target.innerText = "Case Sensitive";
});

document.querySelector("#regex").addEventListener("click", e => {
    if (e.target.innerText === "No Regex") e.target.innerText = "Regex";
    else e.target.innerText = "No Regex";
});
