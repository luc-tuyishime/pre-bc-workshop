let { reverseString } = require('../src');
const { expect } = require('chai');

describe('Reserve', () => {
  it("It shoud reverse a string", () => {
    expect(reverseString('hello')).to.equal('olleh');
  });
});
