const a = 50
let myPromise = new Promise((resolve, reject) => {
    if(a > 10){
        const obj = {
            status: true,
            message: "Promise resolved successfully",
            name: "Pritesh",
            age: 24
        }
        resolve(obj);
    } else {
        const error = {
            status: false,
            message: "Promise rejected"
        }
        reject(error);
    }
})

// console.log("--START--");
// myPromise.then((message) => {
//     console.log(message);
// }, (error) => {
//     console.log(error);
// })

// myPromise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise is either resolved or rejected");
// })
// console.log("--END--");

// Chaining Promises
myPromise.then((message) => {
    console.log(message);
    return "Chaining promises";
}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected");
})