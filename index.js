const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");





const mQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?"
    },
    {  
        type: "input",
        name: "managerId",
        message: "What is your manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?"
    }
];

const eQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's github username?"
    }
];

const iQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is your intern's id?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?"
    }   
];

// need options for adding more employees

const addMore = [
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "Done"]
    }
];

function nextEmployee() {
    // switch function to add type of employee engineer, intern, or done 
    inquirer.prompt(addMore).then(function(answer) {
        switch (answer.addEmployee) {
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
            case "Done":
                console.log("Your team is being created!");
                makeLineUp();
        }
    })
}

// functions for each section of the team building process

function manager() {
    inquirer.prompt(mQuestions).then((answer) => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail);
        console.log(manager);
        nextEmployee();
    }
    );
}

function engineer() {
    inquirer.prompt(eQuestions).then((answer) => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        console.log(engineer);
        nextEmployee();
    }
    );

}

function intern() {
    inquirer.prompt(iQuestions).then((answer) => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        console.log(intern);
        nextEmployee();
    }
    );

}

// make group function
function makeLineUp() {
     fs.writeFile()
}

function init() {
    manager();
}

init();