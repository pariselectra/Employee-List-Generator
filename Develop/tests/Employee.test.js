const Employee = require('../lib/Employee');

test('create employee', () => {
        const employee = new Employee ["manager", 'Jason', "1234", "jason@company.com", "123", "jason@github.com"];

        expect(employee.employeeType).toBe("manager");
        expect(employee.employeeName).toBe("Jason");
        expect(employee.employeeID).toBe("1234");
        expect(employee.email).toBe("jason@company.com");
        expect(employee.officeNumber).toBe("123");
        expect(employee.github).toBe("jason@github.com");
})