var a=require("readline-sync")
var ch=a.question("inter the character")
if (ch>="a" && ch<="z"  ||  ch>="A" && ch<="Z"){
    console.log("it is character")
}else if (ch>=0 && ch<=9){
    console.log("it is a  number")
}else{
    console.log("it is a special character")
}