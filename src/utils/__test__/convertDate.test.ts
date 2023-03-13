import convertDate from '../convertData';

describe('convertDate function', () => {
  it(`should return passed date as 'year-month-date' form`, () => {
    expect(convertDate('2020-04-25T13:37:13.564Z')).toBe('2020-04-25');
  });
});

export default {};
