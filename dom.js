const nameElement = document.getElementById("username");
console.log("🚀 ~ nameElement:", nameElement);
debugger;
// console.log("🚀 ~ nameElement:", nameElement.placeholder);

// setTimeout(() => {
//   console.log("timeout");
// }, 10_000);

const waitSync = () => {
    let currentTime = new Date().getTime();
    // console.log("🚀 ~ waitSync ~ currentTime:", currentTime)
    const timeOver = currentTime + 10_000;
  
    while (currentTime < timeOver) {
      // console.log("waiting");
      currentTime = new Date().getTime();
    }
    console.log("time over!!!");
    // console.log(1);
    // console.log(2);
    // console.log(3);
  };
  
  waitSync();