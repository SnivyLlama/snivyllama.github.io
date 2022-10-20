var data;
fetch("/mdata.json", {cache: "force-cache"})
  .then(resp => resp.json())
  .then(stuff => data = stuff);
var but = document.getElementById("find");
var field = document.getElementById("lookup");
var users = document.getElementById("users");

but.onclick = () => {
    users.innerHTML = ``;
    if (field.value == "") return;
    for (const user of data) {
        if (user.u.includes(field.value)) {
            let date = new Date(user.c).toLocaleDateString("en-us", {day: "numeric", month: "short", year: "numeric"});
            users.innerHTML += `<span class="f">${user.i}</span> <span class="def"><span class="en">${user.u}</span><span class="sp">${date}</span></span> ${user.a ? "<span class=\"e\">Patreon</span>" : ""}<br>`
        }
    }
}