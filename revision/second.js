/*
//var second ="";
function factorial(n) {
    var z = 1;
    for(var i=1; i<=n; i++){
  //    second = n + "* n-1"; 
        z = z*i;
    }
    console.log(z);
}


factorial(3);


var fact = 1;
function factorial(n) {
    for(var i=n; i>=1; i--){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(3));*/
/*var student = {
    name: "Sendus Majanni",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[90, 55, 85, 70, 65],
    result: ""
};*/
//console.log(student);
/*function low(g){
    var lowest = g.grades[0];
    for(var i=0; i<g.grades.length; i++){
        if(lowest>g.grades[i+1]){
            lowest = g.grades[i+1];
        }
    }
   console.log(g.name + "lowest grade is: " + lowest);
}
 low(student);*/

var student = [{
    name: "Sendus Majanni",
    dateofBirth: "1/jan/1999",
    phoneNumber: 76040916,
    grades:[40, 55, 35, 70, 45],
    result: "",
    aveer:0
} , {
    name: "sara curely",
    dateofBirth:"01/june/199",
    phoneNumber: 6587942,
    grades: [55, 30, 89, 96, 75],
    result: "",
    aveer:0
} , {
    name: "ahmad aghmad",
    dateofBirth:"01/june/199",
    phoneNumber: 12456789,
    grades: [85, 68, 25, 63, 86],
    result: "",
    aveer:0
} , {
    name: "sedra curely",
    dateofBirth:"15/april/1998",
    phoneNumber: 15462832,
    grades: [50, 25, 68, 96, 40],
    result: "",
    aveer:0
} , {
    name: "mohammad mohammad",
    dateofBirth:"06/feb/1999",
    phoneNumber: 12456789,
    grades: [63, 45, 69, 58, 40],
    result: "",
    aveer:0
}];
var clas = [];
function average(obj) {
    var summation = 0;
    var count = 0;
    for(var j=0; j<obj.length; j++){
        for(var i=0; i<obj[j].grades.length; i++) {
        summation = summation + obj[j].grades[i];
        count++;
        
    }
        if((summation/count)<60){
        obj[j].result="fail";
        obj[j].aveer= summation/count;
            
        clas.push({name: obj[j].name ,result : obj[j].result ,aveer : obj[j].aveer});
    } else {
        obj[j].result="pass";
        obj[j].aveer= summation/count;
        clas.push({name: obj[j].name ,result : obj[j].result ,aveer : obj[j].aveer});
    } 
        
        console.log(obj[j].name + " " + obj[j].result + " " +obj[j].aveer);
        
    }
    clas.sort(function(a, b){
            return a.aveer - b.aveer;
        });
}
  
average(student);
console.log("*****************************************************");
function sort(clas){
            for(var i=0; i<clas.length; i++) {
                for(var j=i+1; j<clas.length; j++) {
                    var first = clas[i];
                if(clas[i].aveer < clas[j].aveer) {
                  clas[i] =  clas[j];
                     clas[j] = first;
                }
                }
            }
    for(var i=0; i<clas.length; i++) {
    console.log(clas[i].name + " " + clas[i].result + " " +clas[i].aveer);
    }
        }

sort(clas);