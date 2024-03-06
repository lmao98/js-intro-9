const person = {
  firstName: "John",
  lastName: "Doe",
  spouse: "Jane Doe",
  age: 45,
  favNumber: 7,
  favCities: ["Chicago", "Miami"],
  address: {
    street1: "123 Chicago St",
    street2: "APT 2",
    city: "Chicago",
    state: "IL",
    ZIP: 12345,
    country: "US",
  },
  jobTitle: "Software Engineer in Test",
  likesJS: true,
  SSN: null,
};

console.log(person.address.city, person.address.state);
console.log(person.favCities);
if (person.likesJS === true) console.log("Good Guy");
else "STAY AWAY GUY";
