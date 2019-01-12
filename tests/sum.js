const { expect } = require('chai');
const { sum } = require('../src');

describe('Sum of two integers', () => {
  it('should add the sum of 6 integers', () => {
  expect(sum(1, 2 , 3 , 4 , 4 , 5)).to.equal(19);
 });
});
