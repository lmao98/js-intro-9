function method1(callback) {
  // login functionality that runs in 5 seconds
  setTimeout(() => {
    console.log("LOGIN");
    callback();
  }, 5000);
}
function method2(callback) {
  // navigate to profile
  setTimeout(() => {
    console.log("NAVIGATE TO PROFILE");
    callback();
  }, 1000);
}
function method3(callback) {
  setTimeout(() => {
    console.log("UPDATE PROFILE PICTURE");
    callback();
  }, 3000);
}
function method4() {
  setTimeout(() => {
    console.log("YOUR PROFILE IS SUCCESSFULLY UPDATED!");
  }, 2000);
}
// Using callbacks to handle the asynchronous issue
function program() {
  method1(() => {
    method2(() => {
      method3(() => {
        method4();
      });
    });
  });
}
program();
// ****************************************

function gotoAmazon(callback, err) {
  setTimeout(() => {
    let network = true;
    if (network) {
      console.log("Welcome to amazon.com");
      callback();
    } else {
      err();
    }
  }, 2000);
}

function searchForProduct(productName, err) {
  setTimeout(() => {
    if (productName.trim().length > 0) console.log(`Here is the results for ${productName}`);
    else err();
  }, 1000);
}

gotoAmazon(
  () => {
    searchForProduct("Laptop", () => {
      throw Error("Product name cannot be empty!");
    });
  },
  () => {
    throw Error("ERROR occurred while navigating to amazon.com");
  }
);
