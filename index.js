var length = document.querySelectorAll("button").length;
for (let i = 0; i < length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var keyy = this.innerHTML;
        makesound(keyy)
    });
}



document.addEventListener("keypress", function (event) {



    makesound(event.key);
});


function makesound(key) {
    switch (key) {
        case "a":
            var audio = new Audio("02.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("02.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("02.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("02.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("02.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("02.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("02.mp3");
            audio.play();
            break;
        default:
            alert("Press the Key which are in there..");
            break;
    }

}
