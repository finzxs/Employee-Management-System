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

//Step 5: creat a company class that holds employees and managers in an array

//Step 6: Instantiate company class and add employees and managers to it






