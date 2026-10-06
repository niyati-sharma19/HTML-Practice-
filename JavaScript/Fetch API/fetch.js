const URL= "https://catfact.ninja/docs?api-docs.json";
// let promise = fetch(URL);
// console.log(promise);
const btn = document.queryselector ("#btn");
btn.addEventListner("click" , getfacts);
const factpara= document.queryselector ("#fact");
const getfacts = async () => {
    console.log("Promising data....");
    let promise = await fetch(URL);
    console.log(response.status);//json format
    let data = await response.json();
    console.log(data);
    // for( i in data){
    // factpara.innerText = i;
    // }
    factpara.innerText = data[0].text;
};
function getfacts() {
    fetch(URL) 
    .then((response) => {
        return response .json();
    })
    .then((data) => {
        console.log(data);
        factpara.innerText =data[2] .text;
    });

}
btn.addEventListner("click" , getfacts);
