let list = require("../country/state/city/index");
let getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (list) => {
  let firstName = getFirstNames(list);
  return firstName;
};
module.exports = getPeopleInCity;
