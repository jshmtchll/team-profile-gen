const Manager = require('../lib/Manager');

test('create manager obj', () => {
    const manager = new Manager('Dio Brando', '5678', 'dio@gmail.com', 'O13');

    expect(manager.name).toBe('Dio Brando');
    expect(manager.id).toBe('5678');
    expect(manager.email).toBe('dio@gmail.com');
    expect(manager.office).toBe('O13');
});

test('for manager role', () => {
    const manager = new Manager('Dio Brando', '5678', 'dio@gmail.com', 'O13');
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})