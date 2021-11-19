//Question 1 //
document.getElementsByTagName('img')[0].style.width='100px';
let questionOne = ['window', 'document','console'];

//Question 2 //
let h1s = document.getElementsByTagName('h1');
for(let h1 of h1s){
 if(h1.className!="special") {
    h1.style.color = 'red';
 }    
}

//Question 3 //
let bcitlinks = document.querySelectorAll("a[href='bcit']");
for(let link of bcitlinks){
 link.style.textDecoration = "none";
}

function questionThree(number){
   if(number>=60){
      return true;
   }else{
      return false;
   }
}

//Question 4 //
$('p').click(function(){$(this).addClass("cliked")});

let paragraphs = document.getElementsByTagName('p');//
for (let paragraph of paragraphs){ 
   paragraph.ondblclick= function(){
         paragraph.style.fontStyle="italic";
      }
}

//Question 5//

function targetInner(){
   document.getElementById('target').innerHTML = "Complete!";
}
function questionFive(){
   setTimeout(targetInner,5000);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res =>{
 window.users = res;
 //console.log(res);
   useData();
})
function useData(){
   document.getElementById('user').innerHTML = window.users[8].username;
}


//Question 6 //

let divQuestionSix=document.getElementById('questionSix');
document.createElement('div');
document.body.appendChild(divQuestionSix);
 let h2= document.createElement('h2');
 divQuestionSix.appendChild(h2);
 let textH2 = document.createTextNode('DOM Scripting');
 h2.appendChild(textH2);

let div =document.createElement('div');
divQuestionSix.appendChild(div);
div.style.width ='200px';
div.style.height ='200px';
div.style.backgroundColor='red';

let img= document.createElement('img');
img.src='a.jpg';
img.id = 'img3';
div.appendChild(img);

//Question 7 //

function questionSeven(){
   return {
      title: "The Art of the Deal",
      author: "Donald Trump",
      YearPublished: 1987,
      readBook: function(){
       }
   }
}







