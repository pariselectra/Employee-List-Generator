const inquirer = require('inquirer');
const fs = require('fs');

const generateGithubList = ({employeeType, employeeName, employeeID, email, officeNumber, github}) =>
`
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css">
    <title>Employee Generator</title>
</head>
<body>
<div class = "container">
<h1 id="employeeName> ${employeeName}</h1>
<h4> id="employeeType"> ${employeeType}</h4>
<h2 id="employeeID">${employeeID}</h2>
<h2 id="email">${email}</h2>
<h2 id="officeNumber">${officeNumber}</h2>
<h2 id="github">${github}</h2>
</div>
<script src="./script.js"></script>
</body>
</html>
`;

inquirer
    .prompt([
        {
            type:"checkbox",
            message: "idk how to write this yet",
            name: "employeeType"
        },
        {
            type:"input",
            message: "What is the employee's name?",
            name: "employeeName"
        },
        {
            type:"input",
            message: "What is the employee's ID?",
            name: "employeeID"
        },
        {
            type:"input",
            message: "What is the employee's email?",
            name: "email"
        },
        {
            type:"input",
            message: "What is the employee's office number?",
            name: "officeNumber"
        },
          {
            type:"input",
            message: "What is the employee's github?",
            name: "github"
        }
    ])


.then((response) =>{
    const responseContent = generateGithubList(response);

    fs.writeFile('employees.html', responseContent, (err) =>
    err? console.error(err) : console.log('Success!'));
})