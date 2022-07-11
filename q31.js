var c=require("readline-sync")
var b=c.questionInt("inter the number")
// var num=c.questionInt("enter the number")
a=b%10
if (a==3){
    console.log("last digit 3 hai")
}else if (a!=3){
    console.log("last digit 3 nhi hai")
}else if (b%3==0){
    console.log("divisible hai")
}else{
    console.log("divisible nhi hai")
}