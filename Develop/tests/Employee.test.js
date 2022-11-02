const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee');
 
test('addNewEmployee', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});

