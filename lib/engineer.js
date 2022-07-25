class Engineer {
  constructor(employee, github) {
    this.employee = employee;
    this.github = github;
  }

  getGitHub() {
    return this.github
  }
  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;