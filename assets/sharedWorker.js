let counter = 0;
let messages = [];

onconnect = function (e) {
  console.log(e.ports);
  const port = e.ports[0];

  port.onmessage = function (event) {
    messages.push(event.data);
    port.postMessage(messages);
  };
};
