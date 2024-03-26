const { Actions } = require("../utils/actions.js");

/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() 
methods)
- Validate the output is as below
    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully

  */

function test1() {
  Actions.visitUrl("www.example.com")
    .then(() => {
      return Actions.login("TechGlobal", "Test1234");
    })
    .then(() => {
      return Actions.validateTitle("AnyTitle");
    })
    .catch((error) => {
      console.log(error);
    });
}

test1();

async function test2() {
  try {
    await Actions.visitUrl("www.example.com");
    await Actions.login("TechGlobal", "Test1234");
    await Actions.validateTitle("AnyTitle");
  } catch (error) {
    console.log(error);
  }
}

test2();
