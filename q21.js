var a=require("readline-sync")
var b=a.question("inter the character")
if (b=="a" || b=="e" ||b=="i" || b=="o"|| b=="u" && b=="A"|| b=="E"|| b=="I"||b=="O"|| b=="U"){
    console.log("it is a vowel")
}else{
    console.log("consonant")
}