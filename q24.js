var a =require("readline-sync")
var b=a.questionInt("inter the number")
var c=a.questionInt("inter the number")
var d=a.questionInt("inter the number")
e=b+c+d
if(e==180){
    console.log("triangle is valid")
}else{
    console.log("not valid")
}