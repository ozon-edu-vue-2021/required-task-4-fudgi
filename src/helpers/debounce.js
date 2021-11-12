const debounce = (callback, timout) => {
  let lastCallTimer = null;

  return function (args) {
    if (lastCallTimer !== null) clearTimeout(lastCallTimer);

    lastCallTimer = setTimeout(() => callback(args), timout);
  };
};

export default debounce;
