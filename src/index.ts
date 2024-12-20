let a: number = 20;
let username: string = "dalen";
let password: string = "123"
let isEmail: boolean = false;
let x;

x= 10;
x="dalen"
// arrays of typescript properties

let numbers: string[] = ["one", "two", "three"]
// tuple
let persons: [number, string] = [1, "two"]

// tuple array

let employees: [number, string][];
employees = [
    [1, "one"],
    [2, "two"],
    [3, "three"]
]
// accessing
console.log(employees[0][0])

// enum
const enum Size {Small, Medium, Large}
const enum SizeString {Small = "small", Medium = "medium", Large = "large" }
const enum PizzaPromotion {Monday = "Buy one free one", Tuesday = "Buys two free two", Wednesday = "Normal"}

//accessing
console.log(Size.Small, Size.Medium, Size.Large);
console.log(PizzaPromotion.Monday.toLowerCase())

// functionality

let calculatorTax = function (income: number, tax = 0.1): number {
    let total = income + tax;

    return total
}
// console.log(calculatorTax(12,"jsnc")) called like this it will error type

console.log(calculatorTax(10, 10))
console.log(calculatorTax(10))

// Object Types
let staff: {
    readonly id: number;
    name: string;
    salary? : number;
    details: () => string;
    recruitment : (data: Date) => void;
} = {
    id: 1,
    name: "dalen",
    details: function () {
        return `ID ${ this.id }, Name ${ this.name}`
    },
    recruitment: function (data: Date) {
        console.log(`${this.name} is retiring on ${data}`)
    }
}

// staff.id = 2;  error
console.log(staff.id)

staff.recruitment(new Date())
console.log(staff)

