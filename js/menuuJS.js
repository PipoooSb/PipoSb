var menu = document.getElementById("menuu");
var altura = menu.offsetTop;
var medida = 700; //px en donde nuestro menu va a desaparecer


window.addEventListener('scroll', function(){
    
    if(window.pageYOffset > altura) {
        menu.classList.add("menuuPegajoso"); //dinamismo de nuestro menu pegajoso
        
        if(window.pageYOffset>medida){ //condicional para desaparecer nuestro stcky header
            menu.style.opacity = "0";
            }else{
            menu.style.opacity = "1";
            }
    }else{
        
        menu.classList.remove("menuuPegajoso");
    }
})
