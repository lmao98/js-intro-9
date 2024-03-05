// Find the first city that has the odd length  -> Chicago
const cities = ["Berlin", "Rome", "Chicago", "Kiev", "Istanbul", "Tokyo"];

let firstOddLengthCity;

for (let i = 0; i < cities.length; i++) {
  if (cities[i].length % 2 !== 0) {
    firstOddLengthCity = cities[i];
    break;
  }
}

console.log(firstOddLengthCity);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const citiesWithMoreThan5Char = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].length > 5) {
    citiesWithMoreThan5Char.push(cities[i]);
  }
}

console.log(citiesWithMoreThan5Char);

// Find all the citites that has i or I in it

const citiesWithI = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].toLowerCase().includes("i")) {
    citiesWithI.push(cities[i]);
  }
}

console.log(citiesWithI);
