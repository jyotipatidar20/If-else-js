var a=require("readline-sync")
var b=a.questionInt("inter the number")
var c=a.questionInt("inter the number")
var d=a.question("inetr the symbol ")
if (d=="+"){
    console.log(b+c,"addition")
}else if (d=="-"){
    console.log(b-c,"subtraction")
}else if(d=="*"){
    console.log(b*c,"multiply")
}else if(d=="%"){
    console.log( b%c,"reminder")
}else{
    console.log("wrong info")
}