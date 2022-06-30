
// document.getElementsByClassName("set")[0].addEventListener("click",function()
// {
//    var audio=new Audio("sounds/tom-1.mp3");
//    audio.play();
// });

function makesound(btn)
{
    switch (btn) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;


    }
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var a1 = this.innerHTML;
        makesound(a1);
        buttonAnimation(a1);
       
    });

}

document.addEventListener("keypress",function(event){     
            makesound(event.key);
            buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    
   var activebtn= document.querySelector("."+currentKey);
   activebtn.classList.add("pressed");

   setTimeout(function(){
       activebtn.classList.remove("pressed");
   },100);
}