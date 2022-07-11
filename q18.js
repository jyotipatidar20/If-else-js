var a=require("readline-sync")
var num=a.questionInt("inter the number")
if (num>0){
    console.log("positive")
}else if(num<0){
    console.log("negative")
}else{
    console.log("zero")
}