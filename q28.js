var a=require('readline-sync')
var b=a.questionInt("inter the number of student")
var c=a.questionInt("inter the student name")
per= b/c*100
if (per<=75){
    console.log("student allow in exam ")
}else{
    console.log("student not allow in exam")
}