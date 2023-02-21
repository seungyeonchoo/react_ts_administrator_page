const convertDate: (date: string) => string = date => {
  const getDate = new Date(date);
  const getFullYear = getDate.getFullYear();
  const getMonth =
    getDate.getMonth() + 1 < 10 ? `0${getDate.getMonth() + 1}` : getDate.getMonth() + 1;
  const getDay = getDate.getDate() < 10 ? `0${getDate.getDate()}` : getDate.getDate();

  return `${getFullYear}-${getMonth}-${getDay}`;
};

export default convertDate;
