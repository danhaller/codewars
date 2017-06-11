const make_lazy = (fn, ...args) => {
  return () => fn.apply(fn, args);
}

module.exports = make_lazy;
