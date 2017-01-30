var employees = [];
function Employee(name, jobTitle, salery, status) {
    this.name = name;
    this.jobtitle = jobTitle;
    this.salery = salery; 
    this.status = status || "fulltime";
    this.printEmployeeForm = function(){
        console.log("Name=" + this.name + ", " + "Job Titile=" + this.jobtitle + ", " + "Status=" + this.salery + ", " + "status=" + this.status + ", ");
    }
}
/*var employee = new Employee("wael", "staff", "30$/day");
console.log(employee.Employee);*/
employyes.push(new Employee("hdg",357,"eifj"));
employyes.push(new Employee("y8t7ii",1278,"rur"));
employyes.push(new Employee("tyu",78983,"tyu"));
for(var i = 0; i<employees.length; i++){
    employees[i].printEmployeeForm();
}