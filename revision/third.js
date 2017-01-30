var Students = function(name, dateOfBirth, grade, phone, result){
    this.sname = name;
    this.dob = dateOfBirth.Date();
    this.sphone = phone;
    this.sgrade = grade; 
    this.sresult = result;
    
    this.age = function() {
        var date1 = new Date();
        var date2 = dateOfBirth;
        date1 - date2
    }
}
var sameer = new Students("Sendus Majanni", jan/12/1999 , 76040916, [40, 55, 35, 70, 45], "fail" );
console.log(sameer);
sameer.age();