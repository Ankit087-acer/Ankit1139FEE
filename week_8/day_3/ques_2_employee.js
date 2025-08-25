const employee={
name:"John",
poistion:"Developer",
salary:50000,
}
employee.salary=60000;
employee["department"]="IT";
delete employee.poistion;
console.log(employee)
