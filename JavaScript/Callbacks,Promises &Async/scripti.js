// Callback S programming
const  data = [
    {fullname : "Ajay" , Profession : "SE"},
    {fullname : "Niyati" , profession : "SE"}
        
];
function getd() {
    setTimeout(() =>
    {
        let out = "" ;
        data.forEach ((data,index) =>{
        out += <li> {$data.name}</li>
        })
         document.body.innerHTML = output ;

    } , 1000);
}
function createdata (newdata ) {
    return new Promise((resolve,reject) => {

    })
    setTimeout (() =>{
        data.push(newdata);
        let err = false ;
        if (! err){
            resolev();
            
        }
        else {
            reject("everything is good");
        }
    } , 2000);
}
createdata({name : "Vivek " ,Profession : "Software Engineer"} , getd);
getd() ;