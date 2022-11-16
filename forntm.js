var ntm = document.getElementById("ntm-u-suck");
var tab = document.getElementsByTagName("tbody")[0];
var els = document.getElementsByClassName("prob-in");

ntm.onclick = () => {
    document.getElementsByTagName("div")[0].style.display = "block";
    tab.children[0].innerHTML = `<td class="conj-td">AND</td><td class="conj-td">${els[0].value * els[1].value}</td>`;
    tab.children[1].innerHTML = `<td class="conj-td">OR (NOT mutually exclusive)</td><td class="conj-td">${parseFloat(els[0].value) + parseFloat(els[1].value) - (parseFloat(els[0].value) * parseFloat(els[1].value))}</td>`;
}