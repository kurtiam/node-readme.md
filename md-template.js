module.exports = function makeMD(data, res) {
    return `

# ${data.title}

##  Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#faq's)
* [Team Members](#team-members)

##  Description 

 ${data.description}  

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

##  Installation 

 ${data.installation} 

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

##  Usage 

 ${data.usage} 

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

## License 

 ${data.license} 

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

##  Tests 

 ${data.tests} 

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

##  FAQ's  

  ${data.questions}  

<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>

## Team Members

<img align="left" src="${res[0].data.avatar_url}" width=96> &nbsp;${res[0].data.name} <br>&nbsp;<${data.uEmail}><br>&nbsp;<${res[0].data.location}>

<br>
<details>
<summary>Go to:</summary>

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [FAQ's](#FAQ's)
* [Team Members](#team-members)
* [Table of Contents](#Table-of-Contents)

</details>


[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
`
};
