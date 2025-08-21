const a=Symbol("Key")
const obj={
    [a]:"Key",
    "name":"Ankit",
    lastname:"Parida",
    "Age":19,
    "isLoggedin":true,
    greet:()=>{
        console.log("Hello")
    }
}
obj.greet();
obj.anothergreet=function(){
    console.log(`Hello,${this.name}`)
}
obj.anothergreet()
// function o(obj){
//     console.log(obj);
// }
// o(obj)