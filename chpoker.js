const modeZen = 0;
const modeIdle = 1;

const bonusModificator = 10;

const spriteCatOpen = "cat_open";
const spriteCatClose = "cat_close";

const spriteDemonOpen = "demon_open";
const spriteDemonClose = "demon_close";

const SFXCHPOK = new Audio("sfx/pop.mp3");

var CHPOKS = 0;
var MODE = modeZen;

var styleOpen  = spriteCatOpen;
var styleClose = spriteCatClose;

function main(){
    setSprite('popcat');
    window.setInterval(autoChpoker, 1000)
}

function autoChpoker() {
    if (MODE == modeIdle) {
        changeState();
    }
}

function setMode(newMode) {
    MODE = newMode;
}

function setSprite(sprite) {
    if (sprite == "popcat") {
        styleOpen  = spriteCatOpen;
        styleClose = spriteCatClose;
    } else {
        styleOpen  = spriteDemonOpen;
        styleClose = spriteDemonClose;
    }

    document.getElementById("chpoker").className = styleOpen;
}

function changeState() {
    CHPOKS++

    if (CHPOKS%bonusModificator == 0) {
        document.getElementById("score").className = 'score';
        setTimeout(() => { document.getElementById("score").className = 'score_pop';}, 500);
    }

    document.getElementById("score").innerHTML = CHPOKS;
    SFXCHPOK.play();

    document.getElementById("chpoker").className = styleClose;
    setTimeout(() => { document.getElementById("chpoker").className = styleOpen;}, 125);
}
