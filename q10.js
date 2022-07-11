a=require("readline-sync")
var b=a.questionInt("inter the age")
if (b>=5){
    console.log("go to school")
}if (b>=18){
    console.log("can vote in election")
}if(b>=21){
    console.log("can drive a car")
}if (b>=24){
    console.log("can marry")
}if(b>=25){
    console.log("eligible to drink")
}else{
    console.log("wrong info")
}