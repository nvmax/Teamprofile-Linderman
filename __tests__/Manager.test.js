// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super(name, id, email);
//         this.officeNumber = officeNumber;
//     }
//     getOfficeNumber() {
//         return this.officeNumber;
//     }
//     getRole() {
//         return 'Manager';
//     }
// };
// using format from above to make tests easier to read
const Manager = require('../lib/Manager');

// tests constructor 
test('constructor', () => {
    const manager = new Manager('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(manager.name).toBe('John Doe');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('johndoe@johndoe.com');
    expect(manager.officeNumber).toBe('johndoe');
} );
// tests office number using getOfficeNumber() method
test('getOfficeNumber method', () => {
    const manager = new Manager('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(manager.getOfficeNumber()).toBe('johndoe');
} );
// tests getRole method
test('getRole method', () => {
    const manager = new Manager('John Doe', '123', 'johndoe@johndoe.com', 'johndoe');
    expect(manager.getRole()).toBe('Manager');
} );



