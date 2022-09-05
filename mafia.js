fetch("https://api.github.com/gists/e57ffb6b7389047c6d609dcad4ed5a66")
.then(resp => resp.json())
.then(data => {
    rooms = JSON.parse(data.files["mafia.json"].content).rooms
    params = new URL(window.location.href).searchParams
    user = params.get("user")
    redirect = params.get("r")
    text = document.getElementById("text")
    for (const room of rooms) {
        if (room.hostUser.username == user || !user) {
            if (text.innerHTML == "Loading...") {
                text.innerHTML = ""
            }
            if (redirect) {
                text.innerHTML = "Redirecting..."
                window.location.replace(`https://mafia.gg/game/${room.id}`)
                return;
            }
            text.innerHTML += `<a href="https://mafia.gg/game/${room.id}">${room.hostUser.username} is hosting a ${room.hasStarted ? "currently running " : ""}room with ${room.playerCount} players!</a><br>`
        }
    }
    if (text.innerHTML == "Loading...") {
        text.innerHTML = "No games sadly"
    }
})