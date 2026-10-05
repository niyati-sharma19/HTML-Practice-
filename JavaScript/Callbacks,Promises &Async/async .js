//Async && Await 
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
function start() {
   await  createdata({name : "Niyati " , profession : "Software Dvelopment"});
   getData() ;
}

start() ;