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

