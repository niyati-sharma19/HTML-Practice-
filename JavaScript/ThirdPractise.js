//Print all even numbers from 0 to 100 
console.log("Priniting the  even  numbers  fro  0 to 100  ");
console.log("List Of Even Numbers");
for ( let j = 0 ; j <= 100 ; j ++){
    if ( j % 2 == 0){
        console.log(i);
        
    }
}
//Creat a game where you start with any random game number .Ask the user to keep guessing the game number untill the user enters correct value.
let gameNum = 25 ;

//let userNum = prompt("Guess the Number :") ;
let i = 0 ; 
while ( i <= 3 ){
    //game
    if (userNum === gameNum){
        console.log("Congratulations , you entered");
        break ; 
    }
    else {
        let userNum = prompt("Guess the Number :") ;
        i++;
    }


}
console.log("Better luck next tym ");

