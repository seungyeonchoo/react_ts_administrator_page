import convertPhoneNumber from '../convertPhoneNumber';

describe('convertPhoneNumber function', () => {
  it(`should return '010-****-5678' when '010-1234-5678' is passed as argument`, () => {
    expect(convertPhoneNumber('010-1234-5678')).toBe('010-****-5678');
  });
});

export default {};
