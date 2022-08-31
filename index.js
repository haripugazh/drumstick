var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click",function handleclick(){
   var buttonInnerHtml=this.innerHTML;
   makesound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);

});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key)
{
    switch(key)
{
    case "w":
    var aud=new Audio("tom-1.mp3");
    aud.play();
    break;
    case "a":
    var aud=new Audio("tom-2.mp3");
    aud.play();
    break;
    case "s":
    var aud=new Audio("tom-3.mp3");
    aud.play();
    break;
    case "d":
    var aud=new Audio("tom-4.mp3");
    aud.play();
    break;
    case "j":
    var aud=new Audio("crash.mp3");
    aud.play();
    break;
    case "k":
    var aud=new Audio("kick-bass.mp3");
    aud.play();
    break;
    case "l":
    var aud=new Audio("snare.mp3");
    aud.play();
    break;
    default:console.log(buttonInnerHtml);
}
}
function buttonAnimation(currentkey){
    var animate=document.querySelector("."+currentkey);
    animate.classList.add("pressed");
    setTimeout(function(){
        animate.classList.remove("pressed");
    },100);
}
