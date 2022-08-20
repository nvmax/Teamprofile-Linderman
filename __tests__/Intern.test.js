const Intern = require('../lib/Intern');

// tests school constructor
test('school constructor', () => {
    const intern = new Intern('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(intern.school).toBe('johndoe');
} );
// tests school name using getSchool() method
test('getSchool method', () => {
    const intern = new Intern('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(intern.getSchool()).toBe('johndoe');
} );
// tests getRole method
test('getRole method', () => {
    const intern = new Intern('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(intern.getRole()).toBe('Intern');
} );
