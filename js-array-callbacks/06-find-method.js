const cities = ["Rome", "Kyiv", "Berlin", "Brugge", "LA"];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv

const cityWith4 = cities.find((city) => city.length === 4);
console.log(cityWith4);
