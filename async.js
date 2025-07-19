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
// console.log("Order Processed:", confirmation);
//             });
//         });
//     });
// });

const waitSync = () => {
  let currentTime = new Date().getTime();
  // console.log("🚀 ~ waitSync ~ currentTime:", currentTime)
  const timeOver = currentTime + 5000;

  while (currentTime < timeOver) {
    // console.log("waiting");
    currentTime = new Date().getTime();
  }
  // console.log("time over!!!");
  // console.log(1);
  // console.log(2);
  // console.log(3);
};

// waitSync();

setTimeout(() => {
  // console.log("time over!!!");
}, 0);
// console.log(1);
// console.log(2);
// console.log(3);

// Promise  -> promise of future value

// network request
// DB CRUD -  promises
// generating password salt - cryptography

// 3 states - PENDING
// FULFILLED REJECTED - SETLLED

const promise = new Promise((resolve, reject) => {
  // resolve("promise data");
  reject("Promise rejected with reason-123");
});

setTimeout(() => {
  // console.log("time over!!!");
}, 0);

// console.log(1);
// console.log(2);
// console.log(3);

// fetch not supported by node js

// promise
//   .then((val) => console.log("🚀 ~ val:", val))
//   .catch((err) => console.error(err));

const URL = "https://jsonplaceholder.typicode.com/users";

// promise HELL
// fetch(URL).then((response) => {
//   // 2s
//   console.log("🚀 ~ fetch ~ response:", response);
//   response.json().then((users) => {
//     // 1s
//     console.log("🚀 ~ response.json ~ users:", users); // 3
//   });
// });

//  async await
// const getUserData = async () => {
//   console.log("inside async await");
//   const response = await fetch(URL);
//   console.log("🚀 ~ getUserData ~ response:", response);
//   const users = await response.json();
//   console.log("🚀 ~ getUserData ~ users:", users);
// };
// getUserData();
(async () => {
  try {
    try {
      // promise.then((myPromise) => console.log("🚀 ~ myPromise:", myPromise))
      const myPromise = await promise;
      console.log("🚀 ~ myPromise 110:", myPromise);
      
    } catch (error) { // cb-1
      console.log("🚀 ~ catch block-1 error:", error)
      const err = new Error("user generated error");
      throw err;
      
    }
  } catch (error) { //cb2
    console.log("🚀 ~ catch-2 error:", error);
  } finally {
    console.log("🚀 ~ finally:");
  }
})();

(async () => {
  console.log("inside async await");
  const response = await fetch(URL);
  console.log("🚀 ~ getUserData ~ response:", response);
  const users = await response.json();
  console.log("🚀 ~ getUserData ~ users:", users);
})();
