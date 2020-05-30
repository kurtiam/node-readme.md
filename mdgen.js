const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const makeMD = require("./md-template");
const filename = "README.md";

const askQ = [
    {
        type: "input",
        name: "user",
        message: "Enter GitHub UserName: ",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your username';
            }
        }
    },

    {
        type: "input",
        name: "uEmail",
        message: "Enter perfered email: ",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter an email';
            }
        }
    },

    {
        type: "input",
        name: "title",
        message: "Add Project Title: "
    },
    {
        type: "input",
        name: "description",
        message: "Add Project Description: "
    },

    {
        type: "input",
        name: "installation",
        message: "Add Installation info: "
    },

    {
        type: "input",
        name: "usage",
        message: "Add Usage info: "
    },
    {
        type: "input",
        name: "tests",
        message: "Add test info: "
    },

    {
        type: 'editor',
        name: 'questions',
        message: 'Add your FAQ in your text editor and save. Either number each question or use "\\" after each line break for md new line formatting: ',

    },

    {
        type: "list",
        message: "License Type:",
        name: "license",
        choices: ["MIT", "Unlicense", "Apache-2.0", "AGPL-3.0", "MPL-2.0", "LGPL-3.0", "LGPL-2.1", "GPL-3.0", "GPL-2.0", "EPL-2.0", "CC0-1.0", "BSD-3-Clause", "BSD-2-Clause"]
    },

];

const getAnswers = () => {
    return inquirer.prompt(askQ);


};

const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, function (err) {
        if (err) console.log(err);
        console.log(`${filename}  was successfull!`);
    });
};

const gitAPI = data => {
    try {
        const userURL = `https://api.github.com/users/${data.user}`;
        return axios.all([axios.get(userURL)]);
    } catch (error) {
        console.log(`${error}`);
    };
};

async function makeItSo() {
    try {
        const data = await getAnswers();
        const gitInfo = await gitAPI(data);
        const page = makeMD(data, gitInfo);
        writeToFile(filename, page);
    } catch (error) {
        console.log(`${error}`);
    };
};
makeItSo()




