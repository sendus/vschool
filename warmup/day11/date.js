var days = [
     "Sunday", ":Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
var date = new Date();
var dayIndex = date.getDay();
console.log("Today is:", " ",  days[dayIndex]);
var hours = getHours();
var minutes = getMinutes();
var seconds = getSeconds();
console.log("the current timne is: ", hours, minutes, seconds);