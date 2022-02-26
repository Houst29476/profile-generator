const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "prod");
const outputPath = path.join(OUTPUT_DIR, "prod.html");

const render = require("./lib/htmlRenderer");

const memberType = [];
const teamID = [];

function nodeApp() {

// -------- Manager Questions -------- //
function createManager() {
    console.log("Let's build your dream team!");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "(1) What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "(2) What is the team manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "(3) What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "(4) What is the team manager's office number?",
      }

    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      memberType.push(manager);
      teamID.push(answers.managerId);
      generateTeam();
    });
  }

// -------- Engineer Questions -------- //
function createEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "(1) What is your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "(2) What is your engineer's id?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "(3) What is your engineer's GitHub username?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "(4) What is your engineer's email?",
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerGithub, answers.engineerEmail);
      memberType.push(engineer);
      teamID.push(answers.engineerId);
      generateTeam();
    });
  }

  // -------- Intern Questions -------- //
  function createIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "(1) What is your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "(2) What is your intern's id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "(3) What is your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "(4) What is your intern's school?",
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      memberType.push(intern);
      teamID.push(answers.internId);
      generateTeam();
    });
  }
  
  // ------ Inquirer function to Add more Team Members ------ //
  function generateTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Manager":
          createManager();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          makeTeam();
      }
    });
  }

  function makeTeam() {
    const finishedTeam = render(memberType);
    console.log(finishedTeam);

    fs.writeFile(outputPath, finishedTeam, "utf8", (err) => {
        if (err) throw err;
        console.log('Your team has been saved!');
    });
  }

  createManager();
}

nodeApp();