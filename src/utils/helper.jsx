const decimalSeperator = (decimal) => {
  return decimal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
};

export {
  decimalSeperator,
}