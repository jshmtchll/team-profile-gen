const Intern = require('../lib/Intern');

test('create intern obj', () => {
    const intern = new Intern('Dick Wolf', '1234', 'dickwolf@gmail.com', 'University');
    expect(intern.name).toBe('Dick Wolf');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('dickwolf@gmail.com');
    expect(intern.school).toBe('University');
});

test('for intern school', () => {
    const intern = new Intern('Dick Wolf', '1234', 'dickwolf@gmail.com', 'University');
    expect(intern.getSchool()).toEqual(expect.stringContaining('University'));
});

test('for intern role', () => {
    const intern = new Intern('Dick Wolf', '1234', 'dickwolf@gmail.com', 'University');
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})