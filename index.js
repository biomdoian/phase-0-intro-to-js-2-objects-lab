// Write your solution in this file!
let employee = {}; 

function updateEmployeeWithKeyAndValue(employeeToUpdate, key, value) {
  return { ...employeeToUpdate, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeToUpdate, key, value) {
  employeeToUpdate[key] = value;
  return employeeToUpdate;
}

function deleteFromEmployeeByKey(employeeToUpdate, key) {
  const { [key]: deletedKey, ...rest } = employeeToUpdate;
  return rest;
}

function destructivelyDeleteFromEmployeeByKey(employeeToUpdate, key) {
  delete employeeToUpdate[key];
  return employeeToUpdate;
}