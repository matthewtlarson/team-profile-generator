class Manager {
  constructor(employee, officeNumber) {
    this.employee = employee;
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber
  }
  getRole() {
    return 'Employee'
  }
}

module.exports = Manager;