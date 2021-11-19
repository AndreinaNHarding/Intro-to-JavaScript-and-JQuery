//Part 1
let currentTime= new Date();
let h= (currentTime.getHours()%12);
let m= currentTime.getMinutes();
alert("The current time is: " + h+":"+m);

//Part 2
let myArray = ["Ann", "Andrea", "Paul", "Daniel", "Adan", "Kevin"];
let number=0;  
for(let i=0; i<myArray.length; i++){
if( myArray[i].includes("i")){   
  alert("The name: " + myArray[i] + " contains i");   
}
number++;
}


//Part 3
for(let i=0; i<document.links.length; i++){
    document.links[i].style.textDecoration = "none";
}

//Part 4

let myImages = document.getElementsByTagName("div");
for(let i=0; i<myImages.length; i++){  
    myImages[i].style.width='100px';
    myImages[i].style.height='100px';
    myImages[i].classList.add("message");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let v = Math.floor(Math.random()*255);
    `rgb(${r},${g},${v})`
}

