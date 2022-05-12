const sharedWorker = new SharedWorker("assets/sharedWorker.js");
const form = document.getElementById("chatForm");

const clearUl = () => {
  const uls = document.getElementsByTagName("ul");
  for (let i = 0; i < uls.length; i++) {
    const element = uls[i];
    element.remove();
  }
};

sharedWorker.port.onmessage = function (e) {
  if (e.data && e.data.length > 0) {
    clearUl();

    const ul = document.createElement("ul");

    for (let i = 0; i < e.data.length; i++) {
      const element = e.data[i];
      const li = document.createElement("li");
      li.textContent = element;
      ul.appendChild(li);
    }

    document.body.appendChild(ul);
  } else {
    // call api
  }
};

const handleSendMessage = (e) => {
  e.preventDefault();
  const { value } = e.target.message;
  sharedWorker.port.postMessage(value);
  e.target.reset();
  e.target.message.focus();
};

form.addEventListener("submit", handleSendMessage);

// const calculateBtn = document.getElementById("calculate");
// // var worker = new Worker("/assets/worker.js");

// // worker.onmessage = function (e) {
// //   console.log(e.data);
// // };

// // calculateBtn.addEventListener("click", () => {
// //   worker.postMessage("hello worker");
// // });

// sharedWorker.port.onmessage = function (e) {
//   console.log(e.data);
// };

// calculateBtn.addEventListener("click", () => {
//   sharedWorker.port.postMessage("hello worker");
// });

// // bgChangeBtn.addEventListener("click", () => {
// //   if (document.body.style.background === "red") {
// //     document.body.style.background = "green";
// //   } else {
// //     document.body.style.background = "red";
// //   }
// // });
