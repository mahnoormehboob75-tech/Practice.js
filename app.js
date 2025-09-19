// chapter no 1
// alert("enter your valid password!");
// document.write("<h1>Welcome to JS Land, Happy Coding!</h1>");
// alert("Welcome to JS Land, \n Happy Coding!");
// alert("Welcome to JS Land,");
// alert("Happy coding"); 
// // chapter no 2
// var username;
// var myname ="mahnoor mehboob"
// var message;
// message = "Hello World";
// alert(message);
// var message;
// var username ="john dee"
// var age ="15 years old"
// var certificate = "certificated of mobile application development"
// alert(username)
// alert(age)
// alert(certificate)
// alert("PIZZA\n PIZZ\n PIZ\n PI")
// var email="my email address is example@example.com"
// alert(email)
// var book = " I am trying to learn from the book A smarter way to learn JavaScript"
// var store = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(store)
// // chapter 3 
// var age = "I am 15 years old";
// alert(age);
// var visits = localStorage.getItem("visits");
// if (visits === null) {
//     visits = 1;
// } else {
//     visits = Number(visits) + 1;
// }
// localStorage.setItem("visits", visits);
// alert("You have visited this site " + visits + " times");
// var birthdate= 1 
// document.write("my birth date is 1 feb")
// var visitorname = "john dee"
// var ProductTitle = "T shirts "
// var quantity = 5
// document.write(visitorname + " ordered " + quantity + " " + ProductTitle + " on XYZ shop");
// // chapter  4
// var name = "mahnoor"
//     age =  16;
//     city = "karachi";
// // iilegal variable

// // legal variable
// var mahnooormehboob;
// var username;
// var age;
// var $amount;
// document.write("<h1>Rules for naming JS variables</h1><br>")
// document.write("Variable names can only contain numbers,$ For example $my_1stVariable<br>")
// document.write("Variables must begin with a letter, $ or _____. For example $name, _name or name<br> ")
// document.write("Variable names are case sensitive<br>")
// document.write("Variable names should not be JS key words<br>")
// chapter 5
var num1 = 3
var num2 = 5
console.log(num1+num2)
var num1 = 3
var num2 = 5
console.log(num1-num2)
var num1 = 3
var num2 = 5
console.log(num1*num2)
var num1 = 3
var num2 = 5
console.log(num1/num2)
var num1 = 3
var num2 = 5
console.log(num1%num2)
var value;
document.write("Value after variable declaration is: " + value +"<br>")
var initialnumber=5
document.write("initial value:" + initialnumber +  "<br>")
initialnumber++
document.write("“Value after increment is: " + initialnumber + "<br>" )
initialnumber = initialnumber + 7;
document.write("Value after addition is: 13<br>")
initialnumber--
document.write("Value after decrement i: " + initialnumber + "<br>")
var reminder = initialnumber % 3
document.write("The remainder is :" + reminder + "<br>")
var ticket = 600
var x= 5
document.write("Total cost to buy" +x+" ticket to movei" + x*ticket + "PKR<br>");
document.write("Table of 4<br>")
var number = 4
document.write(number + "X 1 =" + (number*1) + "<br>")
    document.write(number + "X 1 =" + (number*1) + "<br>")
    document.write(number + "X 2 =" + (number*2) + "<br>")
    document.write(number + "X 3 =" + (number*3) + "<br>")
    document.write(number + "X 4 =" + (number*4) + "<br>")
    document.write(number + "X 5 =" + (number*5) + "<br>")
    document.write(number + "X 6 =" + (number*6) + "<br>")
    document.write(number + "X 7 =" + (number*7) + "<br>")
    document.write(number + "X 8 =" + (number*8) + "<br>")
    document.write(number + "X 9 =" + (number*9) + "<br>")
    document.write(number + "X 10 =" + (number*10) + "<br>")
    var celsius = 25
    var Farehinet = (celsius *9/5) + 32
    document.write( celsius+ "c is" , Farehinet+ "F <br>")
     var Farehinet = 70
    var celsius = ( Farehinet - 32) *5/9
    document.write( Farehinet + "c is" ,celsius + "F <br> ")
     var PriceOfItem1 = 650;
var PriceOfItem2 = 100;
var QuantityOfItem1 = 3;
var QuantityOfItem2 = 7;
var ShippingCharges = 100;
  var Totalcost = (PriceOfItem1 * QuantityOfItem1) + (PriceOfItem2 * QuantityOfItem2) + (ShippingCharges)
document.write("Totalcost = " + Totalcost +"<br>");
var Totalmarks = 980;
var Obtainedmarks = 804;
document.write("Obtained Marks = " + Obtainedmarks + "<br>");
document.write("Total Marks = " + Totalmarks + "<br>");
var percentage = (Obtainedmarks / Totalmarks) * 100;
document.write("Percentage = " + percentage + "% <br>");

//     var saudiriyals = 25
//     var Dubai = 10
//     var exchangerate = (saudiriyals* 28, Dubai*  104.80);
//     document.write("Total currency in PKR:" +  exchangerate +"<br>")
// var number = 2
// console.log(number+5*10/2)
//      var currentyear=2025
//      var birthyear=2009
//      var yourageis = (currentyear -  birthyear )
//      document.write("currentyear=2025 <br>" )
//      document.write("birthyear=2009 <br>")
//      document.write("your age is" + yourageis + "<br>")
//     var radius = 20
//     var  circumferenceis = (2*3.14*radius)
//     document.write("The circumferenceis is "+ circumferenceis + "<br>")
//     var Theareais = (3.14*  radius * radius)
//     document.write("The area is" + Theareais +"<br>")
// var snacks = "samosa"
//     var age = 16
//     var maxage = 60
//     var amount = 3
//     var restofyourlife = (age*amount)
//     document.write("snacks =" + snacks + "<br>")
//     document.write("age =" + age  + "<br>")
//     document.write("maxage =" + maxage  + "<br>")
//     document.write("amount =" + amount  + "<br>")
//     document.write("you will need" +restofyourlife + snacks + "to last you until the ripe old age of" +  maxage  + "<br>" )
// // CHAPTER 6
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//               1 - 0 + 1 + 0
// document.write("The value of a is" + a  + "<br>")
// document.write("The value of b is" + b  + "<br>")
// document.write("The result is" + result  + "<br>" )
// var name = prompt("Enter your name:");   
//   document.write("Hello " + name + "! Welcome."); 
//     var number = prompt("Enter a number for multiplication table:", "5");
// var num = prompt("Enter a number for multiplication table:", "5");
// if (num === "" || num === null) {
//     num = 5;
// }
// document.write("<h3>Multiplication Table of " + num + "</h3>");
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>")
// }
// document.write("<table border='1' cellspacing='0' cellpadding='5'>");
// document.write("<tr><th>SUBJECT</th><th>obtained marks</th><th>Total  marks</th>")

// var subject1 = prompt("Enter your 1ST subject name");

// var subject2 = prompt("Enter your 2nd subject name");

// var subject3 = prompt("Enter your 3rd subject name");

// var marksPerSubject = 100;
// var totalMarks = marksPerSubject * 3;
// document.write("Total marks"+ totalMarks +"<br>")
// var obtained1 = +prompt("Enter marks of " + subject1);
// var obtained2 = +prompt("Enter marks of " + subject2);
// var obtained3 = +prompt("Enter marks of " + subject3);
// document.write("<tr><td>" + subject1 + "</td><td>" + obtained1 + "</td><td>" + marksPerSubject + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + obtained2 + "</td><td>" + marksPerSubject + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + obtained3 + "</td><td>" + marksPerSubject + "</td></tr>");
// document.write("</table> <br>")
// var totalObtained = obtained1 + obtained2 + obtained3;
// var percentage = (totalObtained / totalMarks) * 100;
// document.write("<tr><td>" +"Total Obtained Marks" + totalObtained  + "</td><td>" + "Total Marks = " + totalMarks + "</td><td>"+ "Percentage = " + percentage +" %" + "</td></tr> <br>");
// // document.write("Total Obtained Marks = " + totalObtained + "<br>");
// // document.write("Total Marks = " + totalMarks + "<br>");
// // document.write("Percentage = " + percentage + "%");
// // chapter 9 to 11
// var city = prompt("Enter a name of city:", "karachi");
// if (city === "" || city === null) {
//     city= "karachi";
// }
// if (city.toLowerCase() ==="karachi"){
// document.write("Welcome to city of lights <br>"); 
// }
// var gender = prompt("enter your gender")
// if (gender === "male" ) {
//     document.write(" Good Morning Sir. <br>")
// }
// else if(gender ==="female ") {
//  document.write("  Good Morning Ma’am. <br>")
// } 
// var gender = prompt("color of road traffic signal")
// if (gender === "Red" ) {
//     document.write("  Must Stop <br>")
// }
// else if(gender ==="Yellow ") {
//  document.write("  Ready to move  <br>")
// } 
// else if(gender ==="Green  ") {
//  document.write("  Move now  <br>")
// } 
// var fuel = (" remaining fuel in car in liter")
// if (fuel < "0.25litres") {
//     document.write("Please refill the fuel in your car")
// }
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }  
// // true
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
// // false
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// // false ///

// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// // true
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// // false
// if(c === 14){ 
// alert("condition 4 is true"); 
// }
//  // true
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// e. if (true){ 
// alert("True"); 
// } 
// // true
// if (false){ 
// alert("False"); 
// } 


// f. if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }
// // TRUE//

// var obtained1 = +prompt("obtained marks");
// var obtained2 = +prompt("obtained marks");
// var obtained3 = +prompt("obtained marks");
// var Totalmarks= 100
// var totalobtainedMarks = obtained1 + obtained2 + obtained3;
// document.write("obtained marks =" + totalobtainedMarks+"<br>" )
// var Totalmarks = Totalmarks + Totalmarks +Totalmarks
// document.write("Total marks =" + Totalmarks+"<br>" )
// var percentage = (totalobtainedMarks / Totalmarks) * 100;

// if (percentage > 80) {
//   document.write("grade = A-ONE<br>");
//   document.write("remarks = Excellent");
// }
// else if (percentage > 60) {
//   document.write("grade = B<br>");
//   document.write("remarks = Nice");
// }
// else {
//   document.write("grade = Fail<br>");
//   document.write("remarks = Sorry");
// }
// var x = 7;
// var secretnumber   = +prompt("guess the secret number. ");
// if (x === secretnumber ) {
//    document.write( "Bingo! Correct answer <br>" );
//    }
//  else if (++x === secretnumber);
//  {
//     document.write( "Close enough to the correct answer <br>" );
//    }
// var number = +prompt("Enter a number");
// if (number%3 === 0) {
//     document.write(number + "divisible by 3 <br>" )
// }
// else{
//     document.write(number + "divisible is not by 3 <br>" )
// }
// var number = +prompt("Enter a number");
// if(number%2 === 0){
//     document.write(number + "its a even number <br>" )
// }
// else{
//     document.write(number + "its a odd number <br>" )
// }
// var T = +prompt("Enter a Temperature")
// if ( T > 40) {
//     document.write("It is too hot outside.")
// }
// else if (T > 30 ) {
//     document.write("The Weather today is Normal.")
// }
// else if ( T > 20 ){
//     document.write("Today’s Weather is cool.")
// }
// else if( T > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }
// //
// chapter 14 to 16//
// var studentname = []
// var name =["mahnoor,mehboob,alam"]
// var number = [5,7,6]
// var boolen = ["true,false"]
// var qualification = [ "SSC"," HSC", "BCS", "BS"," BCOM", "MS", "M. Phil.", "PhD"]
// console.log(qualification)
// console.log(qualification[0])
// console.log(qualification[1])
// console.log(qualification[2])
// console.log(qualification[3])
// console.log(qualification[4])
// console.log(qualification[5])
// console.log(qualification[6])
// document.write("<h1> QUALIFICATION </h1>")
// for (var i=0; i<qualification.length; i++) 
// document.write(qualification[i] + "<br>")
// var studentname = ["Fatima", "Mahnoor", "Umair"];
// var score = [320, 230, 480];
// var Totalmarks = 500;

// for (var i = 0; i < studentname.length; i++) {
//     var percentage = (score[i] / Totalmarks) * 100;
//     document.write("Score of " + studentname[i] + " is " + score[i] +
//         ". Percentage: " + percentage + "%" + "<br>");
// }
// var colorname = ["Pink","Black","Brown","Blue"]
// document.write(colorname +"<br>")
// var usercolor = prompt("Which color do you like after and beginning");
// document.write(usercolor +"<br>");
//  colorname.unshift(usercolor);
//  document.write(colorname)
//   colorname.push(usercolor);
//  document.write(colorname)
//  var usercolor = prompt("Add two more color begining of the array")
//   colorname.unshift(usercolor);
//    var usercolor = prompt("delete color begining of the array")
//     colorname.shift(usercolor);
// var usercolor = prompt("delete color last of the array")
//     colorname.pop(usercolor);
// var addIndex = +prompt("At which index you want to add a color?");
// var addColor = prompt("Enter the color name to add:");
// colorname.splice(addIndex, 0, addColor);
// document.write("<br>After adding color at index " + addIndex + ": " + colorname  + "<br>");
// var delIndex = +prompt("At which index you want to delete color(s)?");
// var delCount = +prompt("How many colors you want to delete?");
// colorname.splice(delIndex, delCount);
// document.write("<br>After deleting from index " + delIndex + ": " + colorname  + "<br>");
// var studentscores = ["320,230,480,120"]
// document.write("scores of student: "+studentscores  + "<br>" )
//  studentscores.sort();
//  document.write("Ascending" + studentscores + "<br>")
// var citiesname = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Lahore"];
// document.write("All Cities: " + citiesname + "<br><br>");
// var selectedcities = citiesname.slice(1, 3); 
// document.write("Selected Cities: " + selectedcities + "<br><br>");
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: " + arr + "<br>");
// var join = arr.join(" ");
// document.write("Joined String: " + join + "<br>");
var queue = []
queue.push("keyboard")
queue.push("mouse")
queue.push("printer")
queue.push("moniter")
document.write("<h3Device</h3>");
document.write("Devices stored: " + queue + "<br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");
document.write("Out: " + queue.shift() + "<br>");
   
var stack= []
stack.push("keyboard")
stack.push("mouse")
stack.push("printer")
stack.push("moniter")
document.write("<h3Device</h3>");
document.write("Devices stored: " + stack + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
document.write("Out: " + stack.pop() + "<br>");
   var array =[11,78,5]
   var b =  array.map(test);
   console.log(b);
   function test(X){
    return x +10
   }
  //  chapter 12//
var initializearray = [0,1,2,3,1,0,1,2,2,1,0,1]
for(var i = 0; i < initializearray.length; i++){
document.write(initializearray[i] + "")
if((i + 1) % 4 === 0){
  document.write("<br>")
}
}
var initializearray = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0; i < initializearray.length; i++){
document.write(initializearray[i] + "")
if((i + 1) % 1 === 0){
  document.write("<br>")
}
}
var multiplication = parseInt(prompt("Enter a table number"));
var length = parseInt(prompt("Enter table length"));

for (var i = 1; i <= length; i++) {
    document.write(multiplication + " x " + i + " = " + (multiplication * i) + "<br>");
}
var fruits = ["Apple","Mango","Banana","Peach"]
for(var i = 0; i < fruits.length; i++){
document.write(fruits[i] + "")
if((i + 1) % 1 === 0){
  document.write("<br>")
document.write("Element at index " + i + " is " + fruits[i] + "<br")
}
}
document.write("<h1>Counting</h1>")
var Counting = [" 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"]
document.write("Counting" + Counting)
document.write("<h1>reverseCounting</h1>")
var reversecounting = [" 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"]
document.write("reversecounting"+ reversecounting)
document.write("<h1>even</h1>")
var even = ["0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20"]
document.write("even " +even  )
document.write("<h1>odd</h1>")
var odd = [" 1, 3, 5, 7, 9, 11, 13, 15, 17, 19"]
document.write("odd" + odd)
document.write("<h1>series</h1>")
var series = ["2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k"]
document.write("serie" + series)
var A = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("what do you want to order")
var index  = A.indexOf(user)
 if (index !== -1) {
  document.write( user + "is available index " +index + "in our bakery")
}
  else{
    document.write("We are sorry, " + user + " is not available in our bakery.");
}
  var A = [24, 53, 78, 91, 12];
var largest = Math.max(...A);
document.write("Array items: " + A + "<br>");
document.write("The largest number is " + largest + "<br><br>");
var smallest = Math.min(...A);
document.write("Array items: " + A + "<br>");
document.write("The smallest number is " + smallest);
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + "<br>");
    }
}




 
 






















 








 










 
 















