// employee tests for the Employee class


// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     getName() {
//         return this.name;
//     }
//     getId() {
//         return this.id;
//     }
//     getEmail() {
//         return this.email;
//     }
//     getRole() {
//         return 'Employee';
//     }
// };

// using format from above to make tests easier to read

const Employee = require('../lib/Employee');
// tests for the Employee class constructor
test ('instantiates an Employee object', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
});
// test name property constructor argument
test ('instantiates an Employee object with a name property', () => {
    const employee = new Employee('John Doe');
    expect(employee.name).toBe('John Doe');
} );

// test id property constructor argument
test ('instantiates an Employee object with an id property', () => {
    const employee = new Employee('John Doe', '123');
    expect(employee.id).toBe('123');
} );

// test getName method
test ('getName method returns getName()', () => {
    const employee = new Employee('John Doe', '123', 'johndoe@johndoe.com');
    expect(employee.getName()).toBe('John Doe');
} );

// get id property from getId() method
test ('getId() method returns the id property', () => {
    const employee = new Employee('John Doe', '123');
    expect(employee.getId()).toBe('123');
} );

// test email property constructor argument
test ('instantiates an Employee object with an email property', () => {
    const email = "johndoe@johndoe.com";
    const employee = new Employee('John Doe', '123', email);
    expect(employee.email).toBe(email);
} );

// test get email method
test ('getEmail method returns getEmail()', () => {
    const email = "johndoe@johndoe.com";
    const employee = new Employee('John Doe', '123', email);
    expect(employee.getEmail()).toBe(email);
} );

// test getRole method
test ('getRole method returns getRole()', () => {
    const employee = new Employee('John Doe', '123', 'johndoe@johndoe.com');
    expect(employee.getRole()).toBe('Employee');
} );



