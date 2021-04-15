const Employee = require('../lib/employee');


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

