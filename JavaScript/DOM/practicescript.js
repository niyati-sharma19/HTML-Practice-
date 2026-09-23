let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Uit";
console.log(h2);
let divs = document.querySelectorAll("div");
console.log(divs[0]);
divs[1].innerText="new uniquie value 2";
divs[2].innerText="new unique value 3";