var a=require("readline-sync")
var sp=a.questionInt("inter the number")
var cp=a.questionInt("inter the number" )
Profit =sp - cp
if (Profit>0){
    console.log(Profit," profit yaah!")
}else{
    console.log("loss")
}
