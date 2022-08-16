// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         super(name, id, email);
//         this.github = github;
//     }
//     getGithub() {
//         return this.github;
//     }
//     getRole() {
//         return 'Engineer';
//     }
// };
// using format from above to make tests easier to read

const Engineer = require('../lib/Engineer');
// tests github user consttructor
test('github user constructor', () => {
    const engineer = new Engineer('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(engineer.github).toBe('johndoe');
} );
// tests github user name using getGithub() method
test('getGithub method', () => {
    const engineer = new Engineer('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(engineer.getGithub()).toBe('johndoe');
} );

// tests getRole method
test('getRole method', () => {
    const engineer = new Engineer('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(engineer.getRole()).toBe('Engineer');
} );