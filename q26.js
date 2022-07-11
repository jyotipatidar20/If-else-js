var a=require("readline-sync")
var Per =a.questionInt("inter the number")
if (Per >= 90) {
    console.log( "Grade A")
}else if(Per >= 80){
    console.log("Grade B")
}else if (Per >= 70) {
    console.log(" Grade C")
}else if (Per >= 60) {
    console.log(" Grade D")
}else if (Per >= 40) {
    console.log(" Grade E")
}else if(Per < 40) {
    console.log(" Grade F")
}else{
 
   console.log("wrong info")
}