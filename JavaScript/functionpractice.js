//Create a function using the  " function " keyword that takes a string as a arguement and returns the number of vowels in the String 

function vowels(str) {
    let count = 0;

    for (const char of str) {
        if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ) {
            count++;
        }
    }

    return count;
}

console.log("Number of vowels:", vowels("Niyati Sharma"));


//console.log("The list of vowels " , v);
//for a given array of numbers , print the square of each value using the for rach loop
let arr =[1,2,3,4,5];
arr.forEach ((val) =>
{
    console.log(val*val);
}
)