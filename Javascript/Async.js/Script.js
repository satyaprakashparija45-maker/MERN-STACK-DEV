// Asynchronous program ->

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// },5000) //500ms = 5s

// console.log("three")
// console.log("four")
// ------------------------------------------------------------------------

// callback function example ->

//  function sum(a,b) { //normal function
//     console.log(a+b)

//  }
//  function calc(a,b,sumCallback){  // main callback function
//  sumCallback(a,b)

//  //sumCallback -> a function passed as an argument.Inside calc it call the callback function

//  }
//  calc(1,3,sum) // Function passed as an argument - (sum)

//-----------------------------------------------------------------------------

// function Star(name) {
//     console.log("hello", + name)
// }
// function User (name,callback){
//     callback(name)

// }
// User("rakesh",Star)

// function getData(dataId,getNextData){
//     setTimeout( () => {
//         console.log("data", dataId)
//         if(getNextData){
//             getNextData()
//         }
//     },4000);
// }
// console.log("getting data -1 .....")
// getData(1,() =>{
//     console.log("getting data -2.....")
//     getData(2,() =>{
//         console.log("getting data -3.....")
//      getData(3,() =>{
//         console.log("getting data -4.....")
//     getData(4,() =>{
//         console.log("getting data -5.....")
//         getData(5)
//     })
//   })
//  })
// })


// Promise Example ....................................... ->

// let promise = new Promise(( resolve , reject)  =>{
//     setTimeout(()=>{
//         console.log("i am a promise")
//         resolve("success")
//         reject("some network issue is occured")
//     },8000)
// })

// Solution of callback hell by using promise ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getData(dataId){
//     return new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId)
//             resolve("success")
//             //reject("error")

// //         },5000)
// //     })
// // }

// getData(1)
// .then(() => {
//     return getData(2)
//     .then(()=>{
//         return getData(3)
//         .then(()=>{
//             return getData(4)
//             .then(()=>{
//                 return getData(5)
//             })
//         })
//     })
// })


// Example  of  .then & .catch methods ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const getPromise  = () => {
//     return new Promise((resolve , reject) =>{
//             console.log("i am a promise")
//             // resolve("success")
//             reject("error")
//         })
//     }

// Async & await ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function API() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Wheather  App")
            resolve("success")
            // reject("error")
        },6000)
    })
}



function getData(dataId){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("success")
            //reject("error")

        },5000)
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
     


}