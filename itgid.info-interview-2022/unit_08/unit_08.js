const timer = () => {
    console.log('timer');
    setTimeout(callback, 0);
}

const callback = () => {
    console.log('callback');
    timer();
}

// timer();

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('foo');
//     }, 2000);
// });

// promise1.then(value => {
//     console.log(value);
// })

// const promise1 = function () {
//     const p1 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//               resolve('foo');
//             }, 0);
           
//         });
//     p1.then((value) => {
//                 console.log(value);
//                 // expected output: "foo"
//                 promise2();
//     });
// }

// const promise2 = function () {
//     const p2 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//               resolve('bar');
//             }, 0);
            
//         });
//     p2.then((value) => {
//                 console.log(value);
//                 // expected output: "foo"
//                 promise1();
//     });
// }

// promise1();

// 3 вариант
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('foo');
//     }, 2000);
//     setInterval(function (){
//         new Promise((resolve2, reject2) => {
//             console.log(2);
//             resolve2(2)
//         });
//     }, 0);
// });

// promise1.then(value => {
//     console.log(value);
// })