var a=require("readline-sync")
var b=a.questionInt("inter the number")
var c=a.questionInt("inter the number")
var d=a.questionInt("inter the number")
if (b>d && b>c){
    console.log(b," is maximum")
}else if(c>d && c>b){
    console.log(c," is maximum")
}else{
    console.log( d," is maximum")
}