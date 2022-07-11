var a=require("readline-sync")
var b=a.questionInt("inter the  week number")
if (b=="1"){
    console.log("monday")
}else if( b=="2"){
    console.log("tuesday")
}else if( b=="3"){
    console.log("wednesday")
}else if (b=="4"){
    console.log("thrusday")
}else if(b=="5"){
    console.log("friday")
}else if(b=="6"){
    console.log("saturday")
}else if (b=="7"){
    console.log("sunday")
}else{
    console.log("wrong info")
}

