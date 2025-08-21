const a=Symbol("Key")
const obj={
    [a]:"Key",
    "name":"Ankit",
    lastname:"Parida",
    "Age":19,
    "isLoggedin":true,
}
console.log(obj)
console.log(typeof(a))
obj.name="A"
console.log(obj)

