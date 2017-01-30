var classArray = [{
    name:"samer",
    grade: 50
},{
    name:"sendus",
    grade: 90
},{
    name:"wael",
    grade: 78
},{
    name:"tala",
    grade: 84
},{
    name:"salma",
    grade: 95
},{
    name:"sarah",
    grade: 67
}];
var passArray =[];
var failArray = [];
function checkgrade(arr){
    var obj={};
    //arr.length+arr[i].name;
    for(var i = 0; i<arr.length;i++ )
    {  if(arr[i].grade<60){
        obj.name=arr[i].name;
        obj.statusGrade="fail";
        failArray.push(obj);
       } else if (arr[i].grade>60 && arr[i].grade<=75){
        obj.name=arr[i].name;
        obj.statusGrade="good";
        passArray.push(obj);
       } else if (arr[i].grade>75 && arr[i].grade<=90){
        obj.name=arr[i].name;
        obj.statusGrade="very good";
        passArray.push(obj);
       } else {
        obj.name=arr[i].name;
        obj.statusGrade="Excellent";
        passArray.push(obj);
       }
        
        obj={};
    
    }
    print(failArray);
    print(passArray);
}

  checkgrade(classArray);
function print(arrOfGrade){
    for(var i=0;i<arrOfGrade.length;i++)
        console.log(arrOfGrade[i].name +" Status: "+arrOfGrade[i].statusGrade);
    
}

