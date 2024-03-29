// Task 1
class Customer {
  constructor(name, age, membershipType, membershipCost) {
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.membershipCost = membershipCost;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}.`;
  }

  upgradeMembership() {
    this.membershipType = "Premium";
    this.membershipCost *= 1.2; // Increase cost by 20%
  }
}

// Task 2

class VIPCustomer extends Customer {
  constructor(name, age, membershipType, membershipCost) {
    super(name, age, membershipType, membershipCost);
  }

  applyDiscount() {
    this.membershipCost *= 0.9; // Apply a 10% discount
  }
}

// Task 3

class BusinessCustomer extends Customer {
  constructor(name, age, membershipType, membershipCost, duration) {
    super(name, age, membershipType, membershipCost);
    this.duration = duration;
  }

  extendContract() {
    this.duration++; // Extend contract by 1 year
    this.membershipCost *= 0.85; // Decrease the cost by 15%
  }
}
// Task 4

const customer1 = new Customer("John Doe", 30, "Basic", 60);

// Task 5

const vipCustomer = new VIPCustomer("Jane Smith", 35, "Gold", 100);

// Task 6

const businessCustomer = new BusinessCustomer("David Johnson", 40, "Platinum", 200, 2);

// Task 7

customer1.upgradeMembership();
vipCustomer.applyDiscount();

// Task 8

const customers = [customer1, vipCustomer, businessCustomer];

for (const customer of customers) {
  console.log(customer.getDetails());
}
