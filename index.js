// Write your solution in this file!

let employee = {
    name: "OgembaJr",
    streetAddress: "520 Park Avenue"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee};
    newObject[key] = value;
    return newObject;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    let newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
  }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}