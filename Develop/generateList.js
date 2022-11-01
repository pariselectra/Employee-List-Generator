



const user = empData => {
    if (empData.officeNumber) {
        return `Office Number: ${empData.officeNumber}`
    }
    if (empData.school) {
        return `School: ${empData.school}`
    }
    if (empData.github) {
        return `<p>Github: <a href="https://github.com/${empData.github}">${empData.github}</a></p>`
    }
};

const generateCards = templateData => {
    return `
            <body>
                <div class="header-wrapper">
                    <h1>Team Profiles</h1>
                </div>
                <div class = "grid">
                ${templateData.map((emp) => {
        return `
                    <div>
                        <h2>${emp.getName()}</h2>
                        <h3>${emp.getRole()}</h3>
                        <p>${emp.getId()}</p>
                        <p>Email: <a href="mailto:https://${emp.getEmail()}">${emp.getEmail()}</a></p>
                        <p>${user(emp)}</p>
                    </div>
    `
    }).join('')}
                </div>
            </body>`
}




module.exports = templateData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profiles</title>
         <link rel="stylesheet" href="style.css">
        </head>   
            ${generateCards(templateData)}                   
        </html>
        `
};



// const generateList = (members) => {

//     members.map((emp,i) => {
//          console.log(emp)
    
 
//          return(
//          `<!DOCTYPE html>
//          <html lang="en-us">
//          <head>
//              <meta charset="UTF-8" />
//              <link rel="stylesheet" href="style.css">
//              <title>Employee Generator</title>
//          </head>
//          <body>
//          <div class = "container">
//          <h1 id="employeeName"> ${emp.getEmployeeName()}</h1>
//          <h4 id="employeeType"> ${emp.getEmployeeType()}</h4>
//          <h2 id="employeeID">${emp.getEmployeeID()}}</h2>
//          <h2 id="email">${emp.getEmail()}</h2>
//          <h2 id="officeNumber">${emp.getOfficeNumber()}</h2>
//          <h2 id="github">${emp.getGithub()}</h2>
//          </div>
//          <script src="./script.js"></script>
//          </body>
//          </html>`);
//      })

//  }


//  module.exports = generateList