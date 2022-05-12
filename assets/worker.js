let counter = 0;

self.onmessage = function (event) {
  counter++;

  self.postMessage(`counter is ${counter}`);
};
