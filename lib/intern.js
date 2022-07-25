class Intern {
  constructor(employee, school) {
    this.employee = employee;
    this.school = school;
  }

  getSchool() {
    return this.school
  }
  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;