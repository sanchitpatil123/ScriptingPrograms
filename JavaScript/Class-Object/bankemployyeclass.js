class BankEmployee {
    setDetails(name, empId, salary) {
        this.name = name;
        this.empId = empId;
        this.salary = salary;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Employee ID:", this.empId);
        console.log("Salary:", this.salary);
    }
}

let emp1 = new BankEmployee();
emp1.setDetails("Abhishek", 133, 105000);
emp1.display();
