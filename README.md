# INS368

# Table of Contents

- [INS368](#ins368)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [How to install](#how-to-install)

# Description

This is a repository for INS368, this repository has an app which generates a random list of groups with equal number of students and themes for classes

# How to install

To run this project you need to have node and npm install on your machine

Run the following command and replace the first 2 arguments `studentsPath` and `themesPath` for the path of the students and themes txt files

```javascript
node -e 'require("./index.js").organizer("studentsPath", "themesPath", 5)'
```
