window.onload = init;
function init(){
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}
function showAnswer(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name ="Images/" + name + ".jpg";
    image.src = name;
}
function reblur(eventObj){
    var image = eventObj.target;
    var name = image.id;
    name = "Images/" + name + "blur.jpg";
    image.src = name;
}