let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25 ;
//     a++ ;
//     console.log(a); //26

// };
btn1.addEventListener("click" , () =>{
    console.log("button  was clicked handler 1")
});

btn1.addEventListener("click" , () =>{
    console.log("button was clicked handler 2")
});

btn1.addEventListener("click" , () =>{
    console.log("button was clicked handler 3")
});

btn1.addEventListener("click" , () =>{
    console.log("button was clicked handler 4")
});
btn1.removeEventListener("click" , () =>{
    console.log("button was clicked handler 3" )});
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//    console.log(evt.type);
//    console.log(evt.clientX ,evt.clientY);
// };


let div= document.querySelecctor("div");
div.onmouseover = () =>{
console.log(" you are inside div");
} ;