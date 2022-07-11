var a= require("readline-sync")
var b=a.questionInt("inter the number")
var c=a.questionInt("inter the number")
var d=a.questionInt("inter the nymber")
if (b>c && b>d){
    console.log(b,"younger")
}else if (c>d && c>b){
    console.log(c,"older")
}else{
    console.log("wrong")
}