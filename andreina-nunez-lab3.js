
let div1= document.getElementById('div1');
div1.style.width='100px';
div1.style.height='100px';
div1.style.backgroundColor="blue";

//Part One:
let color = ["blue", "green", "red"];

//part two:
let paragraghDiv2 = document.querySelectorAll('#div2 p');
  for(i=0; i<paragraghDiv2.length; i++){
    paragraghDiv2[i].onmouseenter=function(){
          for(i=0; i<color.length; i++){   
            paragraghDiv2[i].style.background = color[i];  
          }
    }
    paragraghDiv2[i].onmouseleave=function(){
        for(i=0; i<color.length; i++){   
            paragraghDiv2[i].style.background = "white";  
          }
    }
 }


//part three:
let button = document.getElementById("toggle");
button.onclick=function(){
div1.style.height='200px';
}