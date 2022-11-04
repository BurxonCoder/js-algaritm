// sleepIn 

//3 Sposob

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

// 2 Sposob

function porrotTrouble (talking , hour){
    return (talking === true && hour > 6 || hour < 7) ? true : false;
}


console.log(porrotTrouble(true , 6));


// makes10

//1 Sposob 


// Больше/меньше: a > b, a < b.
// function makes10 (a , b){
//     if(a === 10 || b === 10 || a+b === 10){
//         return true;
//     }else{
//         return false;
//     }
// }


// 2 Sposob 

function makes10 (a , b ){
    return(a === 10 || b === 10 || a + b === 10) ? true : false;
}


console.log(makes10(9 , 9));



//nearHundred

//1 Sposob

function nearHundred (n) {
    let resaul1 = Math.abs(100 - n)
    let resaul2 = Math.abs(200 - n)
    return resaul1 <= 10 || resaul2 <=10 ;
}

console.log(nearHundred(89));

// posNeg 

// 1 Sposob 

// function  posNeg (a , b , negativ){
//     if(a >= b || b <= a || negativ === false ){
//         return true;

//     }else{
//         return false;
//     }
// }






// 2 Sposob 

function posNeg (a , b , negativ){
    return(a >= b || b <= a || negativ === false) ? true : false;
}


console.log(posNeg(-4, -5, true));


//notString 

// 1 Sposob 



// function notString (str){
//     if(str.slice(0 , 3) === "not "){
//         return str

//     }else{
//         return "not " + str
//     }
// }



//2 Sposob

function notString (str){
    return(str.slice(0,3) === "not ") ? str : "not " + str
}

console.log(notString("bad"));


//missingChar 

// 1 Sposob

function missingChar (str , n){
 
    let str1 = str.slice(0 , n);
    let str2 = str.slice(n + 1,);

    return str1 + str2
}
console.log(missingChar("kitten", 4));



//frontBack

// frontBack("code") → "eodc"
// frontBack("a") → "a"
// frontBack("ab") → "ba"





 function  frontBack (str){
    return str.slice(-1) + str.slice(1 , -1) + str.slice(0 , 1)
 }

 console.log(frontBack("code"));



 // front3

//  front3("Java") → "JavJavJav"
// front3("Chocolate") → "ChoChoCho"
// front3("abc") → "abcabcabc"


function front3 (str){
    return str.slice(0 , 3) + str.slice(0 , 3) + str.slice(0 , 3)
}

console.log(front3("abc"));


//backAraund 

// backAround("cat") → "tcatt"
// backAround("Hello") → "oHelloo"
// backAround("a") → "aaa"


function backAround(str){
    if(str.length > 1){
        return str.slice(-1) + str + str.slice(-1);
    }
}

console.log(backAround("cat"));

// or35

//or35(3) → true
// or35(10) → true
// or35(8) → false

function or35 (n){
    return (n % 3 === 0 ) || (n % 5 === 0);

} 
console.log(or35(8));


//front22

//front22("kitten") → "kikittenki"
// front22("Ha") → "HaHaHa"
// front22("abc") → "ababcab"


function front22 (str){
    if(str.length > 1 ){
        return str.slice(0 , 2) + str + str.slice(0 , 2)

    }
}

console.log(front22("abc"));


//startHi

// startHi("hi there") → true
// startHi("hi") → true
// startHi("hello hi") → false


function startHi (str){
    if(str.startsWith("hi")){

        return true
        
    }else{
return false
        }
    }


    console.log(startHi("hi there"));
    
    
    //iceHot 
    
    
// icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

//1 Sposob

    function iceHot (temp1 , temp2) {
        if (temp1 === temp2 && temp1 > -1 && temp2 < -1 || temp1 > 2 && temp2 < 2 ) {
            return true
            
        }else{
            return false
        }
        
    }
    
    console.log(iceHot(120 , 2));
    
//in1020
    
// in1020(12, 99) → true
// in1020(21, 12) → true
// in1020(8, 99) → false


// function in1020(a , b) {
//     if (a >= 10 && b <= 20 || a >= 10 && b >=20 ) {
//         return true
//     }else{
//         return false
//     }
// }


//2 Sposob

function in1020 (a , b) {
    return (a >= 10 && b >= 20 || a >= 10 && b >= 20) ? true : false
  }


console.log(in1020(8 , 99));
    

    
// hasTeen

// hasTeen(13, 20, 10) → true
// hasTeen(20, 19, 10) → true
// hasTeen(20, 10, 13) → true


//1 Sposob

// function hasTeen (a , b , c) { 
//     if ((a >= 13 && a <= 19 )||(b >= 13 && b <= 19 ) || (c >= 13 && c <= 19)) {
//         return true
//     }else{
//         return false
//     }
//  }

 
 
 //2 Sposob
 
 function hasTeen (a , b , c) {
    return ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) ? true : false
   }
   
   console.log(hasTeen(13 , 20 , 10));
   
   // loneTean 
   
//    loneTeen(13, 99) → true
//    loneTeen(21, 19) → true
//    loneTeen(13, 13) → false

function loneTean (a , b) { 
    if (((a >= 13 && b < 13) || ( a > 19 && b < 19 ) || (a < 13 && b >= 13) || (a >19 && b <=19))) {
        
        return true
        
    }else{
        return false
    }
 }
 
 console.log(loneTean( 13 , 13 ));
 
 function string (){
    let string = "How can mirrors be real if our eyes aren't real";
    let splits  = string.split(" ");
    let stringItog = "";
    
    for (let i = 0 ; i <splits.length; i++){
        let Name = splits [i];
        let First = Name.substring (0 , 1).toUpperCase();
        let Leftowers = Name.substring(1, Name.length)
        stringItog += First + Leftowers + " ";
        }
        
        console.log(stringItog);
 }
 string();