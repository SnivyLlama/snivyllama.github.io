fetch("https://api.github.com/gists/e57ffb6b7389047c6d609dcad4ed5a66")
.then(resp => resp.json())
.then(data => {
    let rooms = JSON.parse(data.files["mafia.json"].content).rooms
    let params = new URL(window.location.href).searchParams
    let user = params.get("user")
    let text = document.getElementById("text")
    for (const room of rooms) {
        if (room.hostUser.username == user || !user) {
            text.innerHTML = "Redirecting..."
            window.location.replace(`https://mafia.gg/game/${room.id}`)
            return;
        }
    }
    if (text.innerHTML == "Loading...") {
        text.innerHTML = "No games sadly"
    }
})
