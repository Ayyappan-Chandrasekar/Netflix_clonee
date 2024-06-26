
// let arr=[1,3,7,8,55,88,76]
// console.log(arr)
// // console.log(arr.pop())
// // console.log(arr)
// // console.log(arr.push(22))
// // console.log(arr.shift())
// // console.log(arr)

// // arr.splice(2,3)
// console.log(arr.slice(1,4))

// let a = [1,2,3]
// let b = [4,5,6]
// let joinarr = a+b
// console.log(joinarr)

// let arr1 = joinarr.split(",")
// console.log(arr1)

// let str1 =" Loremelit, ipsum dolor sit amet   elit co     nse. ctetur adipisicing elit. Quaerat, errorm.  "


// let str2=str1.trimAll()
// console.log(str2)


fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((Response) =>(Response.json()))
.then((Response) =>console.log(Response.json()))
.then((pooj)=> console.log(pooj[0].setup,pooj[0].type))
.catch((error)=>console.log(error))