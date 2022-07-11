a=require("readline-sync")
var b=a.questionInt("inter the number")
if (b%5===0 && b%15===0){
    console.log("divisible")
}else{
    console.log("not divisible")
}
