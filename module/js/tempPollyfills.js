var requestAnimationFrame = global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};

export default requestAnimationFrame;