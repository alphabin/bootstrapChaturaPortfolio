function move(e){
    //console.log("Entering move function")
    var image = document.getElementById('image'),
        w = window.innerWidth,
        h = window.innerHeight,
        mouseX = e.clientX,
        mouseY = e.clientY,
        imageX = (mouseX/w)*100,
        imageY = (mouseY/h)*100;
     
     image.style["background-position"] = imageX + "% " + imageY + "%";
   }
   
   window.addEventListener('resize', move);
   window.addEventListener('mousemove', move);
