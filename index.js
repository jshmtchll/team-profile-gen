const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generateSite = require('./src/template-page');

//arrays for user answers
let engineerArr = [];
let managerArr = [];
let internArr = [];
let employeeArr = {managerArr, engineerArr, internArr};

function promptUser() {

    return inquirer
        .prompt([
            {
                type: 'text',
                name: 'employeename',
                message: `What's this employee's name?(Required)`
            },
            {
                type: 'text',
                name: 'id',
                message: `What's this employee's ID number?(Required)`
            },
            {
                type: 'text',
                name: 'email',
                message: `What's this employee's email address?(Required)`
            },
            {
                type: 'list',
                name: 'role',
                message: `What is this employee's role here?(Use arrow keys)`,
                choices: ['Engineer', 'Manager', 'Intern']
            },
        ])
        .then(({employeename, id, email, role}) => {
            if (role === 'Engineer') {
                return inquirer
                .prompt([
                    {
                        type: 'text',
                        name: 'github',
                        message: `What's the engineer's github account?(Required)`                                  //ENGINEEER QUESTIONS//
                    },
                    {
                        type: 'confirm',
                        name: 'addMore',
                        message: 'Would you like to add more employees?'
                    },
                

                ])
                .then(({github, addMore}) => {
                    engineerArr.push(new Engineer(employeename, id, email, github))
                    if (addMore) {
                        return promptUser();
                    }
                })
            } else if (role === 'Manager') {
                return inquirer
                .prompt ([
                    {
                        type: 'text',
                        name: 'office',
                        message: `What's the Manager's office number?`                                                //MANAGER QUESTIONS//
                    },
                    {
                        type: 'confirm',
                        name: 'addMore',
                        message: 'Would you like to add more employees?'
                    }

                ])
                .then(({office, addMore}) => {
                    managerArr.push(new Manager(employeename, id, email, office))
                    if (addMore) {
                        return promptUser();
                    }
                })
            } else if (role === 'Intern') { 
                return inquirer
                .prompt ([
                    {
                        type: 'text',
                        name: 'school',
                        message: 'What university did/does the intern attend?(Required)'                                 //INTERN QUESTIONS//
                    },
                    {
                        type: 'confirm',
                        name: 'addMore',
                        message: 'Would you like to add more employees?'
                    }
                ])
                .then(({school, addMore}) => {
                    internArr.push(new Intern(employeename, id, email, school))
                    if (addMore) {
                        return promptUser();
                    }
                })
            }
        })

}

promptUser()
    .then(employeeData => {
        return generateSite(employeeArr)
    })