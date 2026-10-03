const getPromise = () =>{
  return new promise ((resolve ,reject) => {
  console.log("I am a promise");
  resolve("fullfill");
  reject("some error");
   });
}
let promise = getPromise() ;
promise.then(() => {
    console.log("Promise Fulfilled");
}) 
promise.catch (() => {
    console.log("rejected");
})

function getData(dataId , getNextData)
{
    return new promise((resolve,reject) => {
      setTimeout(() => {
         console.log("data" , dataId);
         resolve("success");
         if( getNextData){
         getNextData() ;

         }
        },2000);
    }) ;
}