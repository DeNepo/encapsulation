# Teaching Guide

> A little guide for who ever is teaching this module, and for curious students.

The main objective of this module is for students to learn how they can encapsulate their logic, data, views and handlers into a single object using `this`. Along the way they will cover:

- using `this` to access other methods and properties in an object
- setting event listeners in view methods; binding `this` to handler methods
- prototypical inheritance: `Object.create` & `class`es
- static vs. instance methods
- combining all of this in simple frontend projects

Things that won't be covered:

- constructor functions
- extending classes

---

- [Before this Module](#before-this-module)
- [During this Module](#during-this-module)
  - [common confusions](#common-confusions)
  - [week 1](#week-1)
  - [week 2](#week-2)
  - [week 2](#week-2)
- [After this Module](#after-this-module)
- [helpful links](#helpful-links)

---

## Before this Module

In the previous module ([state](https://github.com/HackYourFutureBelgium/separation-of-concerns/)) students learned how to build applications around data organized in an object and to log user interactions. They learned this type of folder structure:

```
/lib
  /logger.js - a dependency for logging user interactions
/src
  /handlers - functions that are attached to the UI with event listeners
  /init - code to initialize the application: importing listeners, and maybe render some UI
  /listeners - short files that import handlers and attach them to the DOM
  /logic - pure functions refactored out of handlers.  not all projects use this
  /views - pure functions that render DOM elements - can import handlers adding listeners
  /data.js - a file exporting JS data -> this file is the focus of the state module
/index.html
```

[TOP](#teaching-guide)

---

## During this Module

Projects in this module will be like projects in the last module except they will each include an object with methods. At first the objects will just contain data and logic, but over time they will progress to:

- binding handler methods to attach to the UI
- using Object.create to reuse methods with different data
- using Classes to create reusable UI components

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
