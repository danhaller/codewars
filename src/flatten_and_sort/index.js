const flattenAndSort = (input) => Array.prototype.concat.apply([], input).sort((x,y) => x-y);

module.exports = flattenAndSort;
