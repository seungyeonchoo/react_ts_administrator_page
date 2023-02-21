const convertGender: (num: number) => 'male' | 'female' = num => {
  return num === 1 || num === 3 ? 'male' : 'female';
};

export default convertGender;
