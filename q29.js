var a=require("readline-sync")
var b=a.questionInt("inter the number")
if (b>=18){
    console.log("eligible for vote")
}else{
    console.log("not eligible for vote")
}