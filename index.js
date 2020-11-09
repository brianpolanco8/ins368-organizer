const fs = require("fs");

const organizer = (studentsPath, themesPath, groupsNumber) => {
  const students = fs.readFileSync(studentsPath).toString().split("\n");
  const themes = fs.readFileSync(themesPath).toString().split("\n");

  groupsDivision(students, themes, groupsNumber);
};

const groupsDivision = (students, themes, groupsNumber) => {
  const groupWithThemes = [];

  // MAX STUDENTS PER GROUP
  const groupsQuantity = Math.floor(students.length / groupsNumber);

  // MAX THEMES PER GROUP
  const themesQuantity = Math.floor(themes.length / groupsNumber);

  for (let i = students.length; i > groupsNumber % students.length; i--) {
    const studentObject = {};
    studentObject["students"] = [];

    for (let i = 0; i < groupsQuantity; i++) {
      //   SELECT RANDOM STUDENT
      const selectedStudent =
        students[Math.floor(Math.random() * students.length)];
      studentObject.students.push(selectedStudent);
      removeItem(students, selectedStudent);
    }
    // PUSH SELECTED STUDENTS TO ARRAY
    groupWithThemes.push(studentObject);
  }

  //   COPY ARRAY OF THEMES INTO NEW ARRAY
  const newThemes = [...themes];

  for (let i = 0; i < themes.length; i++) {
    const selectedTheme =
      newThemes[Math.floor(Math.random() * newThemes.length)];
    if (groupWithThemes[i]) {
      groupWithThemes[i]["themes"] = selectedTheme;
    }

    removeItem(newThemes, selectedTheme);
  }
  console.log(groupsNumber, " Groups");
  console.log(groupsQuantity, " Students per group");
  console.log(themesQuantity, " Themes per group");

  printGroupsWithThemes(groupWithThemes);
};

const removeItem = (arr, value) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

const printGroupsWithThemes = (groupWithThemes) => {
  for (let i = 0; i < groupWithThemes.length; i++) {
    console.log("Grupo ", i + 1);
    for (let j = 0; j < groupWithThemes[i].students.length; j++) {
      console.log("     Student: ", groupWithThemes[i].students[j]);
    }

    // if (groupWithThemes[i].themes && groupWithThemes[i].themes.length > 0) {
    //   for (let k = 0; k < groupWithThemes[i].students.length; k++) {
    //     console.log("Tema: ", groupWithThemes[i].themes[k]);
    //   }
    // } else {
    console.log("       Theme: ", groupWithThemes[i].themes);
    // }
  }
};

module.exports.organizer = (studentsPath, themesPath, groupsNumber) => {
  organizer(studentsPath, themesPath, groupsNumber);
};

// node -e 'require("./index.js").organizer("./students.txt", "./themes.txt", 5)'
