var a=require("readline-sync")
var x=a.questionInt("enter the number :")
var y=a.questionInt("enter the number :")
var z=a.questionInt("enter the number :")
if (x>y || x>z){
    console.log(x,"is sceond maxmuam number")
}else if (y<z || y<x){
    console.log(y,"is sceond maxmuam number")
}else{
    console.log(z,"is sceond maxmuam numbar") 
} 