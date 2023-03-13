import convertGender from '../convertGender';

describe('convertGender function', () => {
  it(`should return 'male' when 1 or 3 is passed`, () => {
    expect(convertGender(1)).toBe('male');
    expect(convertGender(3)).toBe('male');
  });
  it(`should return 'female' when 2 or 4 is passed`, () => {
    expect(convertGender(2)).toBe('female');
    expect(convertGender(4)).toBe('female');
  });
});

export default {};
