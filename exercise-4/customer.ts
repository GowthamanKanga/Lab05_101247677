export class Customer{
    private firstName: string;
    private lastName: string;
    private age: number;

    public getAge(){
        console.log(`Age: ${this.age}`)
    }

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }
}

let customer = new Customer("Gowtham", "Kanga", 22)
customer.greeter