const students = [
  [
    ["Ameer", "Ali", "Hicran"],
    ["Emre", "Abdullah", "Tania", "Mustafa"],
    ["Marta", "Niko", "Mykola"],
  ],
  [
    ["Jane", "Alex", "John"],
    ["Maria", "Max"],
  ],
];

console.log(students.flat(Infinity));
console.log(students.flat(Infinity).length);
