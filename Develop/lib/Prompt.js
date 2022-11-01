const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generateList = require('../generateList');


class Prompt {
    constructor() {
        this.employees = [];
    }


    promptUser() {
        inquirer
            .prompt([
                {
                type:"list",
                message: "Please select the employee's title",
                name: "employeeType",
                choices: ['manager', 'engineer', 'intern', 'none']
                }
                
            ])
            .then ((answers) => {
                const {employeeType} = answers

                switch (employeeType) {
                    case 'manager':
                        this.addManager()
                        break;
                    case 'engineer':
                        this.addEngineer()
                        break;
                    case 'intern':
                        this.addIntern()
                        break;
                    case 'none':
                        this.exit()
                        break;
                    default:
                        break;
                }
            })

        }


        addEmployee(){
            inquirer
            .prompt ({
                type: "list",
                name: "quit",
                message: "Would you like to add another employee or finish?",
                choices: ["Add another employee", "Finish"]
            })
            .then((data) => {
                if (data.quit === "Add another employee") {
                    this.promptUser();
                }
                else {
                    this.writeFile();
                }
            })
        }
        
        addIntern(){
            
            inquirer
            .prompt ([
                {
                    type: "input",
                    message: "What is the employee's name?",
                    name: "employeeName"
                    },
                    {
                    type: "input",
                    message: "What is the employee's ID?",
                    name: "employeeID"
                    },
                    {
                    type: "input",
                    message: "What is the employee's email?",
                    name: "email"
                    },
                    {
                    type: "input",
                    message: "What school does the intern attend?",
                    name: "school"
                    }
                ])
                .then ((answers) => {
                    this.employees.push(new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.school));
                    this.addEmployee();
                })
            

        }
        addEngineer(){
            inquirer
            .prompt ([
                {
                    type: "input",
                    message: "What is the employee's name?",
                    name: "employeeName"
                    },
                    {
                    type: "input",
                    message: "What is the employee's ID?",
                    name: "employeeID"
                    },
                    {
                    type: "input",
                    message: "What is the employee's email?",
                    name: "email"
                    },
                    {
                    type: "input",
                    message: "What is the employee's github?",
                    name: "github"
                    }
                ])
                .then ((answers) => {
                    this.employees.push(new Engineer(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.github));
                    this.addEmployee();
                })
        }

        addManager(){
            inquirer
            .prompt ([
                {
                    type: "input",
                    message: "What is the employee's name?",
                    name: "employeeName"
                    },
                    {
                    type: "input",
                    message: "What is the employee's ID?",
                    name: "employeeID"
                    },
                    {
                    type: "input",
                    message: "What is the employee's email?",
                    name: "email"
                    },
                    {
                    type: "input",
                    message: "What is the employee's office number?",
                    name: "email"
                    },
            ])
            .then ((answers) => {
                this.employees.push(new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.officeNumber));
                this.addEmployee();
            })
        }

        exit(){
            this.writeFile();
        }

       
        writeFile(){
            fs.writeFile("employees.html", generateList(this.employees), (err) => {
                if(err) throw err;

                console.log("directory created");
            })
        }

        
    }
    


module.exports = Prompt;