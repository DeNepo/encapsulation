'use strict';

// delegated methods
const userPrototype = {
  get status() {
    // render userName and loggedIn status into a string
  },
  logIn: function (password) {
    // log the user in if they pass the correct password
  },
  logOut: function () {
    // log the user out no matter what
  },
  changePassword: function (oldPassword, newPassword) {
    // if the user is logged in, and the oldPassword is correct, reset their password
  }
};
console.log('userPrototype:', userPrototype);


// create instances
const userAverie = Object.create(userPrototype);
userAverie.state = {
  loggedIn: false,
  userName: 'Averie',
  password: 'brussels1000'
};

const userRory = Object.create(userPrototype);
userRory.state = {
  loggedIn: true,
  userName: 'Rory',
  password: 'HYF-BE'
};

// test initial instances
const testAverie0 = userAverie.status === 'Averie is logged out';
console.assert(testAverie0, 'Averie 0: Averie is logged out');

const testRory0 = userRory.status === 'Rory is logged in';
console.assert(testRory0, 'Rory 0: Rory is logged in');


// users do things
userRory.logOut();
userAverie.changePassword('brussels1000', 'copenhagen2000');
userAverie.logIn('brussels1000');
userRory.logIn('HYF-BE');


// test intermediate states
const testAverie1 = userAverie.status === 'Averie is logged in';
console.assert(testAverie1, 'Averie 1: Averie is logged in');

const testRory1 = userRory.status === 'Rory is logged in';
console.assert(testRory1, 'Rory 1: Rory is logged in');


// users do things
userAverie.changePassword('bruxelles1000', 'copenhagen2000');
userAverie.logOut();
userRory.changePassword('HYF-BE', 'HYF-CPH');
userRory.logOut();
userAverie.logIn('copenhagen2000');
userRory.logIn('HYF-CPH')


// test intermediate states
const testAverie2 = userAverie.status === 'Averie is logged out';
console.assert(testAverie2, 'Averie 2: Averie is logged out');

const testRory2 = userRory.status === 'Rory is logged in';
console.assert(testRory2, 'Rory 2: Rory is logged in');


// users do things
userRory.logOut();
userAverie.logIn('bruxelles1000');
userAverie.logIn('brussels1000');
userAverie.changePassword('brussels1000', 'copenhagen2000');
userAverie.logOut();
userRory.logOut();
userAverie.logIn('copenhagen2000');


// test final state
const testAverie3 = userAverie.status === 'Averie is logged in';
console.assert(testAverie3, 'Averie 3: Averie is logged in');

const testRory3 = userRory.status === 'Rory is logged out';
console.assert(testRory3, 'Rory 3: Rory is logged out');

// log users with final states
console.log('userAverie:', userAverie);
console.log('userRory:', userRory);
