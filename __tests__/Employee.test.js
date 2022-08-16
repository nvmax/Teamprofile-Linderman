// employee tests for the Employee class

const Employee = require('../lib/Employee');

test ('instantiates an Employee object', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object');
});
// test name property constructor argument
test ('instantiates an Employee object with a name property', () => {
    const employee = new Employee('John Doe');
    expect(employee.name).toBe('John Doe');
} );

