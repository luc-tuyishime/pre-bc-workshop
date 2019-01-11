const reverseString = (input) => {
  return input.split('').reverse().join('');
}

const sum = (...input) => {
  const sum = input.reduce((total, value) => {
    return total += value;
  })
  return sum
}

module.exports = {
  reverseString,
  sum
}
