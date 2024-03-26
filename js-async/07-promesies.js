const { Program } = require("../utils/program");

Program.gotoApp()
  .then((message) => {
    console.log(message);
    return Program.clickOnButton();
  })
  .then((message) => {
    console.log(message);
    return Program.closeApp();
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// or asyinc await

async function test() {
  try {
    await Program.gotoApp();
    await Program.clickOnButton();
    await Program.closeApp();
  } catch (error) {
    console.log(error);
  }
}

// test();
