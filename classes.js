// arrow fn inside class -  refer `this` from enclosing scope Class/function

class Employee {
  constructor(name, empID) {
    this.name = name;
    this.empID = empID;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}, and id is ${this.empID}`);

    function regularFn() {
      console.log("🚀 ~ Employee ~ regularFn ~ regularFn:", this);
      greetArrowFn = () => {
        console.log(this)
        console.log(`Hi, my name is ${this.name}, and id is ${this.empID}`);
      };

      greetArrowFn();
    }
    regularFn();
  }

  greetArrowFn = () => {
    console.log(this)
    console.log(`Hi, my name is ${this.name}, and id is ${this.empID}`);
  };
}


class Manager extends Employee{
    constructor(name, empID, dept){
        // invoke the parent class constructor using super()
        super(name, empID);
        this.dept = dept;
    }

    greet(){
        console.log(`Hi, my name is ${this.name}, and id is ${this.empID} and I manage ${this.dept} dept`);
    }
}



const emp1 = new Employee("test", "E101");
const manager = new Manager('abc', "E102", "Engineering" )

manager.greet();
// emp1.greet();
emp1.greetArrowFn();
