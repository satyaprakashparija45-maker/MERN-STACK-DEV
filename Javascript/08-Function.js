// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.forEach(function printval(val){
//     console.log(val)
// }
// )
// arr.forEach((val) => {
// console.log(val)
// }
// )

// let arr1 = ['goa' , 'pune' ,'chennai','mumbai']
// arr1.forEach((val )=>{
// console.log(val)
// }
// )

//example of a map function ->

// let nums =[ 4,5,6,7,8,3,2]
// // let newArr = nums.map((val)=> {
// //     return (val+val)/2
// // })
// // console.log(nums)
// // console.log(newArr)

// let evenNums = nums.filter((val) =>{
//     return val % 2 === 0;

// })
// console.log(nums)
// console.log(evenNums)

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let newMarks = marks.filter((val) =>{
    return val <=50;
})
 console.log(marks)
 console.log(newMarks)