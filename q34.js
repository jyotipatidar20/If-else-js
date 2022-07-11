var a=require("readline-sync")
var year=a.questionInt("inter the year")
var month=a.questionInt("inter the month")
var d=a.questionInt("inter the day")
if (day=d+1){
    console.log(day,'/',month,'/',year)
}else{
    console.log("wrong")
}
