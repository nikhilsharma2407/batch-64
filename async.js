// // js is a single threaded/call stack sync language;
// // can only perform 1 task at a time;

// // achieve async operations

// // sync steps
// // wait for water to boil
// // after finishing prev step - roundtrip to market
// // after finishing prev step - make noodles

// // async steps
// // put water on gas stove
// // while water is boiling, roundtrip to market
// // make noodles, once back.

// // how to achive async operations in js
// // callbacks - fn passed as arg;
// // setTimeout -
// // using Promises -

// // callback hell
// getUser(userId, (user) => {
//     getOrders(user, (orders) => {
//         processOrders(orders, (processed) => {
//             sendEmail(processed, (confirmation) => {
//                 console.log("Order Processed:", confirmation);
//             });
//         });
//     });
// });


const waitSync = () => {
  let currentTime = new Date().getTime();
  console.log("🚀 ~ waitSync ~ currentTime:", currentTime)
  const timeOver = currentTime + 5000;

  while (currentTime < timeOver) {
    console.log("waiting");
    currentTime = new Date().getTime();
  }
  console.log("time over!!!");
  console.log(1);
  console.log(2);
  console.log(3);
};

// waitSync();

setTimeout(() => {
  console.log("time over!!!");
}, 0);
console.log(1);
console.log(2);
console.log(3);
