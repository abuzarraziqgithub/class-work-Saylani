"use strict";
// const greetTheWorld()
// {
//     let greeting = "Hello World!"
//     alert(greeting)
// }

// using try catch

const greetTheWorld = function () {
  try {
    // IF THERE IS AN ERROR IN THE TRY , THEN THE CATCH WILL CATCH THE ERROR AND WILL ALERT IT.
    let greeting = "Hello World!";
    aler(greeting);
  } catch (err) {
    alert(err);
  }
};
greetTheWorld();
