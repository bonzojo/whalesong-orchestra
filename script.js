const sfxWalrus = new Audio('./resources/sounds/walrus.mp3');
const sfxSeaLion = new Audio('./resources/sounds/seaLion.mp3');
const sfxDolphin = new Audio('./resources/sounds/Dolphin.mp3');
const sfxWhaleBass = new Audio('./resources/sounds/whaleBass.mp3');
const sfxWhaleMid = new Audio('./resources/sounds/whaleMid.mp3');
const sfxWhaleHigh = new Audio('./resources/sounds/whaleHigh.mp3');

const soundButtons = document.querySelectorAll(".sound");

soundButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonInnerHTML = button.innerHTML.trim();
        makeSound(buttonInnerHTML);
    });
});

document.addEventListener("keypress", (event) => {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            playSound(sfxWalrus);
            break;
        case "s":
            playSound(sfxSeaLion);
            break;
        case "d":
            playSound(sfxDolphin);
            break;
        case "j":
            playSound(sfxWhaleBass);
            break;
        case "k":
            playSound(sfxWhaleMid);
            break;
        case "l":
            playSound(sfxWhaleHigh);
            break;
        default:
            console.warn("Unhandled key press: ", key);
    }
}

function playSound(audioElement) {
    if (audioElement) {
        audioElement.play().catch(error => {
            console.error("Error playing sound:", error);
        });
    } else {
        console.error("Invalid audio element provided");
    }
}
