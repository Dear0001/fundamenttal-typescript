// type Employee = {
//     readonly id: number,
//     name: string,
//     salary: number,
//     details: () => string,
//     recruitment: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Employee',
//     salary: 100,
//     details: function() {
//         return `ID ${this.id}, Name ${this.name}`
//     },
//     recruitment: function(date: Date) {
//         console.log(`${this.name} is retiring on ${date}`)
//     }
// }

// console.log(employee.details())

// Unoin type

let unoinType: string | number;
unoinType = 100
unoinType = "string"

function kgToLbs(weight: number | string ): number {
    if (typeof weight === "number"){
        return weight * 2.2
    } else {
        return parseFloat(weight) * 2.2
    }
}

console.log(kgToLbs(10))
console.log(kgToLbs("10kg"))


// intersaction 
type Person = { name: string; age: number };

type Employee = { id: number; name: string; age: number };

type Manager = {
  department: string;
  employees: Employee[];
};

type ManagerWithPerson = Person & Manager;

let manager1: ManagerWithPerson = {
  name: "Tom",
  age: 30,
  department: "IT",
  employees: [
    { id: 1, name: "dalen", age: 25 }, // Ensure these match the Employee type
    { id: 2, name: "dear", age: 28 }
  ]
};

console.log(manager1)

// Literal Type

type Qty = 10 | 20 | 30 | 40 | 50;

function printQty(value: Qty){
  console.log(value)
}

printQty(20)

// Nullable Type

function greet(name: string){
  if(name){
    console.log(`Hello ${name}`)
  } else {
    console.log(`Hello Guest`)
  }
}

// greet(null)
// greet(undefined)
greet("Tom")

// Optional Type

type Customer = {
  name: string,
  birthDate?: Date
}

function getcustomerDetails(id: number): Customer | undefined | null{
  return id === 0 ? null : {name: "Dalen", birthDate: new Date()}
}

let customer = getcustomerDetails(1);

console.log(customer?.name || "Guest");

console.log(customer?.birthDate?.getFullYear() || "N/A");

let customerList: Customer[] = [];

console.log(customerList[0] || "No Customer Found");
