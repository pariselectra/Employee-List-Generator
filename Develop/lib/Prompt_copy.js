const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./Employee");


class Prompt {
    constructor() {
        this.employees = [];
    }


promptUser() {
    inquirer
        .prompt([
            {
            type:"checkbox",
            message: "Please select the employee's title",
            name: "employeeType",
            choices: ['manager', 'engineer', 'intern']
            },
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
            name: "officeNumber"
            },
            {
            type: "input",
            message: "What is the employee's github?",
            name: "github"
            }
        ])
    
        .then (({employeeType, employeeName, employeeID, email, officeNumber, github}) => {
            this.employees.push(new Employee(employeeType, employeeName, employeeID, email, officeNumber, github));
            this.addEmployee();
        })

    }
        addEmployee(){
            inquirer
                .prompt ({
                    type: "checkbox",
                    name: "quit",
                    message: "Would you like to add another employee or finish?",
                    choices: ["Add another employee", "Finish"]
                })
                .then((data) => {
                    if (data.quit === "Add another employee") {
                        this.addEmployee();
                    }
                    else {
                        this.writeFile();
                    }
                })
        }
        

       
        writeFile(){
            console.log(this.employees)
            fs.writeFile("employees.html", generateList(this.employees), (err) => {
                if(err) throw err;

                console.log("directory created");
            })
        }

        
    }
    const generateList = ({employeeType, employeeName, employeeID, email, officeNumber, github}) => {

        

        return(
        `<!DOCTYPE html>
        <html lang="en-us">
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="style.css">
            <title>Employee Generator</title>
        </head>
        <body>
        <div class = "container">
        <h1 id="employeeName"> ${employeeName}</h1>
        <h4 id="employeeType"> ${employeeType}</h4>
        <h2 id="employeeID">${employeeID}</h2>
        <h2 id="email">${email}</h2>
        <h2 id="officeNumber">${officeNumber}</h2>
        <h2 id="github">${github}</h2>
        </div>
        <script src="./script.js"></script>
        </body>
        </html>`);
        }


module.exports = Prompt;