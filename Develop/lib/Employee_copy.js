class Employee {
    constructor (employeeType, employeeName, employeeID, email, officeNumber, github){
    this.employeeType = employeeType;
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.email = email;
    this.officeNumber = officeNumber;
    this.github = github;}


getEmployeeType() {
    return this.employeeType;
}

getEmployeeName() {
    return this.employeeName;
}

getEmployeeID() {
    return this.employeeID;
}

getEmail() {
    return this.email;
}

getOfficeNumber() {
    return this.officeNumber;
}

getGithub() {
    return this.github;
}

}
module.exports = Employee;

