// Write your solution in this file!
const employee = {
    name: "Katie",
    streetAddress: "123 Fun St."
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
 const updatedEmployee = {... employee};

 updatedEmployee[key] = value;

 return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
const copyOfEmployee = {...employee};
delete copyOfEmployee[key];
    return copyOfEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}