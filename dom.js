// const nameElement = document.getElementById("username");
// console.log("🚀 ~ nameElement:", nameElement);
// debugger;
// // console.log("🚀 ~ nameElement:", nameElement.placeholder);

// // setTimeout(() => {
// //   console.log("timeout");
// // }, 10_000);

// const waitSync = () => {
//     let currentTime = new Date().getTime();
//     // console.log("🚀 ~ waitSync ~ currentTime:", currentTime)
//     const timeOver = currentTime + 10_000;

//     while (currentTime < timeOver) {
//       // console.log("waiting");
//       currentTime = new Date().getTime();
//     }
//     console.log("time over!!!");
//     // console.log(1);
//     // console.log(2);
//     // console.log(3);
//   };

//   waitSync();

const btn = document.getElementById("togglePwd");

const inputEl = document.querySelector("#pwd");
const nameEl = document.querySelector("#username");
const phoneEl = document.querySelector("#phone");


const el = document.createElement('input');

el.setAttribute('placeholder','Dynamic element added');


btn.addEventListener("click", (e) => {
  document.querySelector('#form').appendChild(el);
  document.querySelector('#form').removeChild(nameEl);
  // console.log("🚀 ~ btn.addEventListener ~ e:", e);
  // console.log("🚀 ~ btn.addEventListener ~ e:", e.target);
  // inputEl.type = inputEl.type === "text" ? "password" : "text";
});

// nameEl.addEventListener("keyup", (e) => {
//   console.log("🚀 ~ nameEl.addEventListener ~ keyup:", e, e.keyCode);
//   if (e.keyCode === 13) {
//     alert("Enter Pressed!!!");
//   }
// });

nameEl.addEventListener("change", (e) => {
  console.log("🚀 ~ nameEl.addEventListener ~ change e:", e, e.target.value);
});

phoneEl.addEventListener("keypress", (e) => {
  // e.preventDefault();
  console.log("🚀 ~ nameEl.addEventListener ~ keyup:", e, e.key);
  const keys = "0123456789";

  if (!keys.includes(e.key) || e.target.value.length >= 10) {
    e.preventDefault();
  }
});


