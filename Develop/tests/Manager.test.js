const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('Creates manager office', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe('officeNumber');
});