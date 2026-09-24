// let div = document.querySelector ("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let val = div.getAttribute("name");
// console.log(val);
// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));
let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
console.log(button);
/* DOM MANIPULATION 
INSERT ELEMENT */
let div =document.querySelector ("div");
div.prepend(newbtn);// in start of the div block
div.before(newbtn) ;// adds before the node(outside)
div.after(newbtn) ; // adds after the node (outside)
div. append(newbtn) ; // adds at the end of node (inside)
// Delete Element 
div.remove(newbtn) ; // removes the node
let newheading = document.createElement("h1");
h1.innerHTML = " <i> Hi , I am new !" ;
document.querySelectory("body").prepend(newHeading) ;
let para = document.querySelector("p");
para.remove();
newHeading.remove();
