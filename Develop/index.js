const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// const questions = ["What's your favorite color?", "What's your GitHub username?"
  
// ];

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(({ username }) => {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios.get(queryUrl).then(res => {
      const repoNames = res.data.map(repo => repo.name + "\n");
      fs.writeFile("repos.pdf", repoNames, (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(
          `Everything went super great. You did it. Your the best, ever! You saved ${repoNames.length}`
        );
      });
    });
  });

// * The application generates a PDF resume from the user provided GitHub profile.

// The PDF will be populated with the following:

// * Profile image
// * User name


// * Links to the following:
//   * User location via Google Maps
//   * User GitHub profile
//   * User blog

// * User bio

// * Number of public repositories

// * Number of followers

// * Number of GitHub stars

// * Number of users following

function writeToFile(fileName, data) {
 
}

function init() {

init();
};

// * The generated resume includes a bio image from the user's GitHub profile.

// * The generated resume includes the user's location and a link to their GitHub profile.

// * The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

// * The background color of the generated PDF matches the color that the user provides.
