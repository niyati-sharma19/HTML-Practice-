let marvelheroes = ["spiderman","ironman","thor"];
let val = marvelheroes.shift();//deleted from start and return
console.log("deleted",val);
//Slice method
//it returns a piece of the array slice(startIdx,endIdx)
//Splice() -change original array (add,remove,replace)
console.log(marvelheroes.slice(1,3));
console.log(marvelheroes.splice(1,1,78));
//[ractice Questions]
let v = ["Bloomberg" , "Microsoft" , "Uber" ,"Google" ,"IBM" ,"Netflix"];
console.log("removing the first company name " ,v.shift());
console.log("removing Uber and add OLA in its place" , v.splice(2,1,Ola));
console.log("Adding Amazon at end" ,v.unshift("Amazon") );