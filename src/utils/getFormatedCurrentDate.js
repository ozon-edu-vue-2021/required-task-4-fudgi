const getFormatedCurrentDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const offsetedDate = new Date(date.getTime() - offset * 60 * 1000);
  return offsetedDate.toISOString().split("T")[0];
};

export default getFormatedCurrentDate;
