const formatDate = (date) => {
  const dateObject = new Date(date);
  const readableDate = dateObject.toDateString();
  return readableDate;
};

export default formatDate;
