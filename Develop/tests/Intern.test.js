const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('Creates intern school', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});