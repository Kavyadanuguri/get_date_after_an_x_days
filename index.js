const addDays = require("date-fns/addDays");

const kavya = (day) => {
  const date = addDays(new Date(2020, 8, 22), day);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

module.exports = kavya;
