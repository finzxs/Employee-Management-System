//Step 1: Complete
//Step 2: Create Base Class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  };

  describe() {
    return `${this.name} works in ${this.department}`;
  };
};
//step 3: Create subclass and extend to Employee (use super to call parent constructor)
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  };

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
  };
};
//Step 4: sample employees and managers (use New employee() and New manager())
const mgr = new Manager("Sonia Patel", "Marketing", 8);
const emp = new Employee("matthew Smith", "Marketing");
const emp2 = new Employee("Hillary Davis", "IT");

console.log(mgr.describe());
console.log(emp.describe());
console.log(emp2.describe());
//Step 5: creat a company class that holds employees and managers in an array
class Company {
    constructor() {
        this.employees = [];
        this.managers = [];
    };
    addEmployee(employee) {
        this.employees.push(employee);
    };
    addManager(manager) {
        this.managers.push(manager);
    };
    listManagers() {
        this.managers.forEach(manager => {
            console.log(manager.describe());
        });
    };
    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    };
};
//Step 6: Instantiate company class and add employees and managers to it






