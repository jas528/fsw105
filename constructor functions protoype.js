var employee= []

function Employees (name,jobtitle, salary,status){
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary= salary
    this.status= status


    function displayemployee(employees){
        console.log( employees);
    }
}
    var employees1 =new Employees("Bob", "Sally", "20000","teacher,,")
    var employees2=new Employees ("Sam","Jamie", "40000","Truckdriver",)
    var employees3=new Employees ("Kim","Tom","50000","cashier",)
console.log(employees1,employees2,employees3)
employee.push(employees1)
console.log (employee)
  //  displayemployee(1); 
    //displayemployee(2);
   // displayemployee(3);
