function goToCostco() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("GO TO COSTCO");
      if (true) resolve();
      else reject("Car is broken!");
    }, 2000);
  });
}

function getMeat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("GET THE MEAT");
      if (true) resolve();
      else reject("Could not get the meat, Costco was closed!");
    }, 1500);
  });
}

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("COOK");
      if (true) resolve();
      else reject("Cooking did not go well!");
    }, 3000);
  });
}

function serve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("SERVE");
      if (true) resolve();
      else reject("Serving issue");
    }, 1000);
  });
}

function eat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("EAT");
      if (true) resolve();
      else reject("Could not eat");
    }, 500);
  });
}

// promises handling with then() and catch()
function party1() {
  goToCostco()
    .then(() => getMeat())
    .then(() => cook())
    .then(() => serve())
    .then(() => eat())
    .catch((error) => console.log(error));
}
party1();
// promises handling with async and await
async function party2() {
  try {
    await goToCostco();
    await getMeat();
    await cook();
    await serve();
    await eat();
  } catch (error) {
    console.log(error);
  }
}

/*
const pr1 = new Promise(1); // 
const pr2 = new Promise(1);
const pr3 = new Promise(1);

Promise.allSettled([p1, p2, p2])
.then(res => console.log(res))
*/
