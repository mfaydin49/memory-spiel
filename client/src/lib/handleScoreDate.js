const handleScoreDate = (date) => {
  const newDate = new Date(date);
  const hour = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minutes = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} - ${hour}:${minutes}`;
};

export default handleScoreDate;
