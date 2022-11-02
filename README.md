# Employee-List-Generator
    
## Description
This challenge was centered around object oriented programing. In addition to creating classes, multiple interacting Javascript pages, and an interactive node framework, I also had to test the Javascript pages. To begin, I started with a Prompt page. This Javascript page was a directory page of sorts. I set up the three classes that would be necessary: Employee, Intern, Engineer, and Manager. The Employee class was meant to act as a baseline. Although some questions for the employees were universal, there would be different questions prompted based off which type of employee we were handling. The Employee class served as a baseline for the universal information we needed about an employee. The more specific questions would be asked in the classes of Engineer, Intern, and Manager. From there, an HTML document would be generated, and the special user inputs would automatically plug in. In order to style the HTML document, I simply connected a CSS framework. Next, I installed the necessary node modules and json packages that were needed to run the program. This program uses inquirer, jest, and express in order to run from backend to the front end. Jest was used specifically to test the Javascript code. Before actually running the program, I ran tests to insure that everything was in working order.

## Installation

-HTML Link: https://github.com/pariselectra/Employee-List-Generator/blob/main/Develop/generateList.js

-CSS Link: https://github.com/pariselectra/Employee-List-Generator/blob/main/Develop/assets/style.css

-Javascript Link: https://github.com/pariselectra/Employee-List-Generator/blob/main/Develop/index.js

-Other Links: https://github.com/pariselectra/Employee-List-Generator/tree/main/Develop/lib

## Usage

![Final HTML site creation example](./Develop/images/Screen%20Shot%202022-11-02%20at%2012.04.43%20AM.png)

Download Screen Recording Here: https://github.com/pariselectra/Employee-List-Generator/blob/main/Develop/images/Screen%20Recording%202022-11-01%20at%2011.59.53%20PM.mov

## License
MIT License
![MIT License](./LICENSE)

## Contibutions
Reference: https://github.com/ajcuddeback
I used this students' work as reference from my own project creation.

## Testing

-Employee Testing: Testing to ensure that the baseline values were being stored for each new employee entry.

-Engineer Testing: Testing to ensure that the baseline values were being stored for each new employee entry, in addition to the github value for a new engineer.

-Intern Testing: Testing to ensure that the baseline values were being stored for each new employee entry, in addition to the school value for a new intern.

-Manager Testing: Testing to ensure that the baseline values were being stored for each new employee entry, in addition to the office number value for a new manager.