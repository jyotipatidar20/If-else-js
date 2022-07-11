var b=require("readline-sync")
var a=b.question("inter the month number")
if (a=="febuary"){
    console.log("it is a 28 ,29 day")
}else if(a=="april" || a=="june"|| a=="november"){
    console.log("30 day in this months")
}else if(a=="january"|| a=="march"|| a=="may"|| a=="july"|| a=="august"||a=="september"||a=="december"){
    console.log("31 day in this months")
}else{
    console.log("wrong info")
}