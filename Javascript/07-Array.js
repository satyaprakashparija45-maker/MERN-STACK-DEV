// Array ->

// let arr = [ 10, 20, 30, 40, 50 ,60, 70, 80]

// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr[6])


// Loop over an array ->
  

// let Pikachu = ["spider-man" , "Dr.Strange" , "Hulk" , "Iron- man"]
// //  for(let i=0; i< Pikachu.length; i++)
// //     console.log(Pikachu[i])

// for(let i of Pikachu)
// {
//     console.log(i)

// }

// Array methods :-

//  let Chikibar =[ "Burger", "Pizza", "Gol-Gappa"]

//  console.log(Chikibar)
//  Chikibar.push("Ice-cream")
//   console.log( Chikibar)
//   Chikibar.pop()
//   console.log(Chikibar)
//   Chikibar.unshift("5-star")
//   console.log(Chikibar)
//   Chikibar.shift()
//   console.log(Chikibar)


// toString ->

// let marks =[10,20,30,40,50]
// console.log(marks)
// let mark= marks.toString()
// console.log(mark)


// // Concate ->
//  let food = ["burger", "pizza", "momos"]
//  let drink =[ "sprite", "mazza", "cocacola"]
//  let vegetable =["potato","onion", "brinjal"]
//  let res = food.concat(drink)
//  console.log(res)
//  let res1 = [food + drink + vegetable]
// console.log(res1)


//slice ->

//  let arr =[10, 20, 30, 40, 50, 60, 70, 80]
//  console.log(arr.slice(2,5))
//  console.log(arr.slice(0,6))
//  console.log(arr.slice(3))
//  console.log(arr.slice(-3))
//  console.log(arr.slice(4,-2))

// splice ->

//properties of splice ->  (add , remove, replace)

let months =["jan", "fev", "march", "april"]
console.log(months)
months.splice(0,1 , "june")
console.log(months)
months.splice(4,0, "may")
console.log(months)
months.splice(2,3)
console.log(months)



// let marks = [78 ,90, 54, 32, 98, 25, 70 ]
// console.log(marks)

// sum = 0
// // for( let i = 0; i < arr.length ; i++)
// // {
// //     sum = sum + i ;
// // }
// // console.log(sum/7)

// for( let val of marks)
//     {
//         sum = sum + val

// }
// let avg = sum / marks.length
// console.log(avg)
let a = "hello"

console.log(a)
console.log(typeof(a))