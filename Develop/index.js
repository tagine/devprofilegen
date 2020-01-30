const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// const questions = ["What's your favorite color?", "What's your GitHub username?"

// ];

// * The application generates a PDF resume from the user provided GitHub profile.

inquirer
    .prompt({
        message: "Enter your GitHub username",
        name: "username"
    })
    .then(({ username }) => {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(res => {

            // The PDF will be populated with the following:

        // * Profile image
        const avatar = res.data.map(this.avatar_url => avatar + "\n");
        // * User name
        const name = res.data.map(this.login => username + "\n");
        //   * User GitHub profile
        const profileLink = res.data.map(this.url => link + "\n");
        //   * User blog
        const blogLink = res.data.map(this.blog => blog + "\n");
        //   * User location via Google Maps
        const userLocation = res.data.map(this.location => location + "\n");
        //   * User bio
        const userbio = res.data.map(this.bio => biography + "\n");
        //   * Number of public repositories
        const pubRepos = res.data.map(this.public_repos => publicrepos + "\n");
        //    * Number of followers
        const userFollowers = res.data.map(this.followers => followers + "\n");
        //    * Number of GitHub stars
        const userStars= res.data.map(this.starred_url => starred + "\n");
        //     * Number of users following
        const userFollowing = res.data.map(this.following => following + "\n");


    fs.writeFile("repos.pdf", repoNames, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(
            `Everything went super great. You did it. Your the best, ever! You saved ${repoNames.length}`
        );
    });
    });
  });

function writeToFile(fileName, data) {

}

function init() {

    init();
};

// * The background color of the generated PDF matches the color that the user provides.
