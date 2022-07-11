var a=require("readline-sync")
var year=a.questionInt("inter the year")
if (year%4===0){
    console.log("leap year")
}else{
    console.log("not a leap year")
}