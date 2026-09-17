/* ==========================================================
   WHAT IS THE DOM?
   When a web page is loaded, the browser creates a Document 
   Object Model (DOM) of the page.
   It works on Elements 
   
   IMPORTANT: DOM code runs inside the WEB BROWSER, not Node.js.
   Open index.html in your browser and check the Console (F12).
   ========================================================== */

// 1. Selecting by ID (Returns a single element)
 let heading = document.getElementById("heading");
 console.log("1. Selected by ID (#heading):", heading);
// console.dir(heading);

// 2. Selecting by Class Name (Returns an HTMLCollection)
 let titles = document.getElementsByClassName("description");
 console.log("2. Selected by Class (.title):", titles);

// 3. Selecting by Tag Name (Returns an HTMLCollection)
let paragraphs = document.getElementsByTagName("p");
console.log("3. Selected by Tag Name (p):", paragraphs);

// 4. Selecting using querySelector (Returns first match) .> it returns NodeList
let firstTitle = document.querySelector("p"); // 1st Element 
console.log("4. querySelector (.title):", firstTitle);
 
 console.dir(document.body.firstChild);
 
 

// 5. Selecting using querySelectorAll (Returns a NodeList)
let allTitles = document.querySelectorAll("h1");
console.log("5. querySelectorAll (h1):", allTitles);

// 6. DOM Manipulation Example (Changing content dynamically)
 let subHeading = document.getElementById("sub-heading");
 if (subHeading) {
     subHeading.innerText = "Topic 1: DOM Elements Extracted Successfully!";
 }

// 7. Event Handling Example
// let btn = document.getElementById("myBtn");
// if (btn) {
//     btn.addEventListener("click", () => {
//         alert("Button clicked! You're successfully interacting with the DOM.");
//     });
// }