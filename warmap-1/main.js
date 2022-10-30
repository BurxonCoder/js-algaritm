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