function openLetter() {
    document.querySelector(".envelope").style.display = "none";
    document.getElementById("letter").classList.remove("hidden");
}

function yesClick() {
    document.getElementById("response").innerHTML =
    "💖 Ahisha, you just made Ayusman the happiest person! 💖";
}

function noClick() {
    document.getElementById("response").innerHTML =
    "😢 I will keep trying until you say yes!";
}
