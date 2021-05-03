export const getTime = timeStamp => {
  const date = new Date(timeStamp * 1000);

  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const hour = hours >= 12 ? hours - 12 : hours;
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return `${day}/${month}/${year}, ${hour}:${minutes} ${amOrPm}`;
};
