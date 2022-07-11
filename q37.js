console.log("my daily routine")
var a=require("readline-sync")
var time=a.question("enter the time:")
if (time=='6:0'){
    console.log("wake up early morning")
} if( time>="6:0" && time<"7:0"){
    console.log("exercise")
} if (time>="7:0" && time<"8:30"){
     console.log("bath")
} if (time>="8:30" && time<"9:0"){
    console.log("breakfast")
} if (time>="9:0" && time<"10:0"){
    console.log("english activity")
} if (time>="10:0" && time<"13:0"){
    console.log("coding time")
} if (time>="13:0" && time<"15:0"){
    console.log("lunch break")
}if (time>="15:0"&& time<"17:30"){
    console.log("again coding time")
} if (time>="17:30" && time<"18:30"){
    console.log("cultural activity")
} if (time>="18:30" && time<"19:0"){
    console.log("snacks break")
} if (time>="19:0" && time<"20:0"){
    console.log("rest")
} if (time>="20:0" && time<"22:30"){
    console.log("self study")
}else{
    console.log("sleep! .......good night")
}
// console.log("good night")