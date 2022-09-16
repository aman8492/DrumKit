var length=document.querySelectorAll("button").length;
var gaana=new Audio("Gaddi Vich.mp3");
function funct(){
    var btn=this.innerHTML;
    switch (btn) {
    case "a":
        var audio=new Audio("03.mp3");
        audio.play();
        break;
    case "b":
        var audio=new Audio("02.mp3");
        audio.play();
        break;
    case "c":
            var audio=new Audio("03.mp3");
            audio.play();
            break;
    case "d":
            var audio=new Audio("02.mp3");
            audio.play();
            break;
    case "e":
            var audio=new Audio("02.mp3");
            audio.play();
            break;
     case "f":
            var audio=new Audio("03.mp3");
            audio.play();
            break;
    case "g":
            var audio=new Audio("02.mp3");
            audio.play();
            break;}
}





for (var i=0;i<length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",funct);
   

}