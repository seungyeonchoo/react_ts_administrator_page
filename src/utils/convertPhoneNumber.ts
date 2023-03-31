const convertPhoneNumber: (phoneNum: string) => string = phoneNum => {
  return phoneNum
    ?.split('-')
    .map((e, i) => (i === 1 ? '****' : e))
    .join('-');
};

export default convertPhoneNumber;
