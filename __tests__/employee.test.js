const Employee = require('../lib/Employee');


test('created the employee object', () => {
    const employee = new Employee('Some Guy', '0123', 'someguy@gmail.com' );

    expect(employee.name).toBe('Some Guy');
    expect(employee.email).toBe('someguy@gmail.com');
    expect(employee.id).toBe('0123');
});

test('for employee name', () => {
    const employee = new Employee('some guy', '0123', 'someguy@gmail.com');
    expect(employee.getName()).toEqual(expect.stringContaining('some guy'));
});

test('for employee id', () => {
    const employee = new Employee('some guy', '0123', 'someguy@gmail.com');
    expect(employee.getId()).toEqual(expect.stringContaining('0123'));
});

test('for employee email', () => {
    const employee = new Employee('some guy', '0123', 'someguy@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining('someguy@gmail.com'));
})

test('for employee role', () => {
    const employee = new Employee('some guy', '0123', 'someguy@gmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('role'))
})

