//FINDING THE HTML ELEMENTS
const box1=document.getElementById("box-1");
const divs=document.getElementsByTagName("div");
const container=document.getElementsByClassName("container");
//console.log(container);

//FINDING THE HTML ELEMENTS BY CSS SELECTORS
//const box3=document.querySelector(".container #box-3");

//const multipleboxes=document.querySelectorAll('.container div');
//console.log(multipleboxes);

//CHANGING INNER HTML

//box1.innerHTML="<h1>This is box 1</h1>";
//box1.classList.add('fancy');
 
//CREATING AND APPENDING NEW HTML
/*for(let i=0;i<10;i++)
{
    const boxelement=document.createElement('div');
    boxelement.classList.add('box');
    container[0].append(boxelement);
}*/

//CHANGING HTML STYLES
box1.style.borderRadius="50%";