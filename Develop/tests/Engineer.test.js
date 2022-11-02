const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Creates engineer github', () => {
    const engineer = new Engineer('name','id', 'email', 'github');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});