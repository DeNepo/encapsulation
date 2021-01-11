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

### Common Confusions

> things students often struggle with in this module, mistakes you can expect to come across

### Week 1

Before break, discuss `this` & the difference between a function and a method:

- in JS the difference is all about use-cases, there's no technical difference between functions and methods
- `this` can access methods in the parent object
- refactoring functions into methods
- getters and setters can be used to hide (encapsulate) and object's data from the "outer world"
  - this is all about good habits, JS object literals don't have true private classes

After break, do a refactor exercise all together. Refactor a small project made of functions into one that uses methods:

- Study the first steps of the /refactors/cycler example
- Integrate: 01-app-objects
- you can ask a student to share their screen, then moderate the class as they suggest what to refactor

### Week 2

Before break cover prototypical inheritance and how `Object.create` can be used to share methods between different data:

- inspect examples of prototypes in the debugger (/isolate/07-prototype-delegation)
- discuss how prototypes are useful in programming
- inspect examples of Object.create in the debugger (/isolate/08-object-create)
- discuss how Object.create is useful in a program

After break, refactor a simple project from a single object literal instance to multiple instances with `Object.create`

- read through the next steps in /refactors/cycler
- Integrate: 03-object-create
- you can ask a student to share their screen, then moderate the class as they suggest what to refactor

[TOP](#teaching-guide)

---

### Week 3

Before break cover prototypical inheritance and how ES6 Classes are written and how .prototype works behind the scenes:

- inspect examples of prototypes in the debugger (/isolate/05-classes)
- discuss how classes are useful for creating UI components

After break, refactor a simple project from using `Object.create` to using Classes

- read through the next steps in /refactors/cycler
- Integrate: 04-classes
- you can ask a student to share their screen, then moderate the class as they suggest what to refactor

[TOP](#teaching-guide)

---

## After this Module

In the next module ([asynchronous-programming](https://github.com/HackYourFutureBelgium/asynchronous-programming), 3 weeks) students will learn how to use the event loop, scheduling, `fetch` and `async`/`await` in frontend projects built with UI Classes.

[TOP](#teaching-guide)

---

## helpful links

- HYF Be Guidebooks
  - [coaches](https://home.hackyourfuture.be/coaches)
  - [students](https://home.hackyourfuture.be/students)
- About Teaching:
  - https://teachertraining.codeyourfuture.io/
  - https://teach.hackyourfuture.be
