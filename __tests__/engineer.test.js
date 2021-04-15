const Engineer = require('../lib/Engineer');


test('to create engineer obj', () => {
    const engineer = new Engineer ('Speed Weed', '4567', 'speed@gmail.com', 'speedgit')

    expect(engineer.name).toBe('Speed Weed');
    expect(engineer.id).toBe('4567');
    expect(engineer.email).toBe('speed@gmail.com');
    expect(engineer.github).toBe('speedgit');
});

test('for engineer github', () => {
    const engineer = new Engineer ('Speed Weed', '4567', 'speed@gmail.com', 'speedgit')
    expect(engineer.getGithub()).toEqual(expect.stringContaining('speedgit'));
});

test('for engineer role', () => {
    const engineer = new Engineer ('Speed Weed', '4567', 'speed@gmail.com', 'speedgit')
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
})
