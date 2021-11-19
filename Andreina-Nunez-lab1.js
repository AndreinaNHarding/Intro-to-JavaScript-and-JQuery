window.onload = function(){

let firstname = prompt("Please, enter your first name");
let lastname = prompt("Please, enter your last name");
console.log(` First name: ${firstname}, Last name: ${lastname}`);
let img1 = document.getElementById('img1'); 
let img2 = document.getElementById('img2'); 
let img3 = document.getElementById('img3'); 

let img1Width = img1.naturalWidth; 
console.log(typeof img1.naturalWidth);

img2.width = img1Width;
img3.width = img1Width;
console.log(`the width of the first image is ${img1Width}`);
console.log(`the width of the second image is ${img2.width}`);
console.log(`the width of the third image is ${img3.width}`); 

}


/* 
Differences between the clientwidth and 
offsetWidth properties:

OffsetWidth is the size of the visual box including all borders. 
This property returns the width of the element including width, padding and borders
and excludes margins.

ClientWidth is the visual portion of the box content. 

If the total amount of space an element occupies, 
including the width of the visible content  the offsetHeight property should be used.
If the total mount of the space actually displayed takes up without including the border and margins
the clientWidth property is the one to use.

*/

//width is a number value that can be defined as a percent, or in pixels (example on console with the img1Width value)


