a=require("readline-sync")
var b=a.questionInt("inter the number")
var c=a.questionInt("inter the number")
if (b%c===0){
    console.log("divisible")
}else{
    console.log("not divisible")
}