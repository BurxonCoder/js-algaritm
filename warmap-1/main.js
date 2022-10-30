// sleepIn 

//1 Sposob

// function sleepIn (weekday , vacation){
//     if(!weekday && !vacation || !weekday && vacation === true) {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(sleepIn(false , false));

//2 Sposob

function sleepIn (weekday , vacation){
    return (!weekday & !vacation || !weekday && vacation === true) ? true :false
}

console.log(sleepIn( false , true));

//3 Sposob 

// function sleepIn (weekday , vacation){
//     if(weekday === false && vacation === false || weekday === false && vacation === true){
//         return true;

//     }else{
//         return false;
//     }
// }
// console.log(sleepIn(true , false ));


// monkayTrouble 

// 1 Sposob 

// function monkayTrouble (aSmile , bSmile ){
//     if(aSmile === true && bSmile === true || aSmile === false && bSmile === false){
//         return true;
//     }else{
//         return false;
//     }
// }




//2 Sposob 

// function monkayTrouble (aSmile , bSmile){
//     if(!aSmile && !bSmile || aSmile === true && bSmile === true){
//         return true;
//     }else{
//         return false;
//     }
// }




// 3 Sposob 

function monkayTrouble (aSmile , bSmile){
    return(aSmile === true && bSmile === true || !aSmile && !bSmile ) ? true :false
}

console.log(monkayTrouble(true , true));



// sumDouble 

//1 Sposob 


// function sumDouble (a  , b){
//     if(a === b){
//         return (a + b) * 2

//     }else{
//         return a + b
//     }
// }

// console.log(sumDouble(2 , 2));

// 2 Sposob 

function sumDouble (a , b ){
    return(a === b ) ? (a + b) * 2 : a + b;
}

console.log(sumDouble( 2 , 2));



// diff21

// 1 Sposob 

// function diff21 ( n ){
//     if(n <= 21){
// return 21 - n
//     }else{
//         return (n - 21) * 2
//     }
// }


// 2 Sposob 

function diff21 ( n ){
   return(n <= 21 ) ? 21 - n : n - 21 * 2
}
console.log(diff21(19));


// porrotTrouble 

// 1 Sposob 


// function porrotTrouble (talking , hour ){
//     if(talking === true && hour > 6 || hour < 7){
//         return true;
//     } else{
//         return false;
//     }
// }

// 2 

function porrotTrouble (talking , hour){
    return (talking === true && hour > 6 || hour < 7) ? true : false;
}


console.log(porrotTrouble(true , 6));
