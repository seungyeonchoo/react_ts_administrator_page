import addComma from '../addComma';

it('should add comma to passed numbers', () => {
  expect(addComma('7123891239.015')).toBe('7,123,891,239');
});

export default {};
