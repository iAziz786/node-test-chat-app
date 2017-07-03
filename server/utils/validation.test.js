const expect = require('expect');

const {isRealString} = require('./validation');
var nonStringValue = 123114214214;
var emptyString = '         ';
var validString = 'd';

describe('isRealString', () => {
  it('should reject non string values', () => {
    expect(isRealString(nonStringValue)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString(emptyString)).toBe(false);
  });

  it('should allow string with non-space character', () => {
    expect(isRealString(validString)).toBe(true);
  });
});
