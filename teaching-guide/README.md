# Teaching Guide

> A little guide for who ever is teaching this module, and for curious students.

The main objective of this module are more theoretical and higher-level. There is no new JavaScript here, just new ways to use it:

- Thinking of applications as data + interactions
- Reading program logs to understand the flow of a program, user interactions, and changes in state (this can be demonstrated by stepping through the /separated projects together in class)
- Thinking of UI's as being just a representation of the data stored in the program (introducing the concept of component-based UI design could be relevant, depending on the class)
- Writing and using functions that render data into DOM elements, getting fancy

All of this will be put into practice in a large-ish group project over the two weeks of this module, the project is a JS Quiz using this [starter repo](https://github.com/HackYourFutureBelgium/js-quiz-starter). Students are given a project structure and a possible backlog, then will be let loose to plan and develope the project.

- [Before this Module](#before-this-module)
- [During this Module](#during-this-module)
  - [common confusions](#common-confusions)
  - [week 1](#week-1)
  - [week 2](#week-2)
- [After this Module](#after-this-module)
- [helpful links](#helpful-links)

---

## Before this Module

In the previous module ([separation-of-concerns](https://github.com/HackYourFutureBelgium/separation-of-concerns/)) students learned how to divide projects into multiple files and to distribute tasks in a team. They learned this type of folder structure (starter repo [is here](https://github.com/HackYourFutureBelgium/javascript-30-starter)):

```
/src
  /handlers - functions that are attached to the UI with event listeners
  /init - code to initialize the application: importing listeners, and maybe render some UI
  /listeners - short files that import handlers and attach them to the DOM
  /logic - pure functions refactored out of handlers.  not all projects use this
  /data.js - a file exporting JS data -> this file is the focus of the state module
/index.html
```

Students did not have to write projects from scratch in the previous module, instead they studied projects from the [JavaScript30](https://javascript30.com/) then refactored to code into that folder structure. They did this for one week individually, then the second week as a group project.

[TOP](#teaching-guide)

---

## During this Module

Projects in this module will be like projects in the last module with two changes:

- a `/views` folder for JS functions that render data into DOM elements
- a logging dependency in their handler files that allows them to log all interactions and state changes. you can see how this works in the `/separated` directory and in the [js-quiz-starter](https://github.com/HackYourFutureBelgium/js-quiz-starter) for this module's project

```
/src
  /handlers - functions that are attached to the UI with event listeners
  /init - code to initialize the application: importing listeners, and maybe render some UI
  /listeners - short files that import handlers and attach them to the DOM
  /logic - pure functions refactored out of handlers.  not all projects use this
  /views - pure functions that render DOM elements - can import handlers adding listeners
  /data.js - a file exporting JS data -> this file is the focus of the state module
/index.html
```

### Week 1

Before break, discuss what State is and how Logging is helpful by studying the `/separated` projects together. this can include:

- Explain what a state is (in programming context)
- Explain what logging is (use average example to illustrate it)
- Explain the views folder (compare the two summary/detail examples)
- Practice looking at the most recent log and identifying where the data appears in the UI

After break, students will split into small groups to start planning the project. You can help out with scoping, task division, ... whatever they need help with.

### Week 2

Not much planned, this day is a chance to go over the projects all together and to review what was challenging in the last week. You might want to:

- have each group do a quick standup to cover their progress
- have one team share their screen and debug a problem they have all together
- have each team share their wireframes, data.js files & dev-strategy
- break into small groups for 1-1 coach/group time to review progress and help prepare for the next week

[TOP](#teaching-guide)

---

## After this Module

In the next module ([encapsulation](https://github.com/HackYourFutureBelgium/encapsulation), 3 weeks) students will learn how `this`, prototypes and `class`es can be used to group related functions and data into app objects. This won't cover `extend` or bigger concepts of OOP modeling, just enough to make good frontend projects.

If you imagine grouping the functions from this module with the data.js into a single object/class and using `this` instead of import, then you're getting the idea.

[TOP](#teaching-guide)

---

## helpful links

- HYF Be Guidebooks
  - [coaches](https://home.hackyourfuture.be/coaches)
  - [students](https://home.hackyourfuture.be/students)
- About Teaching:
  - https://teachertraining.codeyourfuture.io/
  - https://teach.hackyourfuture.be
