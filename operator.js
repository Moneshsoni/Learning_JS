//Assignment operator
var a=1;
//  prompt("enter a value ",a);
var b=2;
//  prompt("enter  b value ",b);
var c = a + b;
console.log(c);
d=c;
console.log(d);
//two equal to operator can't differenciate value datatype
var z = 3=='3';
console.log(z);

//This got false because === operator is strickly follow the data type
var y = 3==='3';
console.log(y);

//Condition Operator

var e=10 >=15;
console.log(e);
var f=10 <=15;
console.log(f);
var g=10 !=15;
console.log(g);

//concatenate strings
var nam = "Namaste ";
var wor = "World ";

var can = nam+wor;

console.log(can);


//Increment Operator

var inc = 100;
inc++;

console.log(inc);
inc  += 50;
console.log("After value increment",inc);

var dnc =1000;
dnc--;
console.log(dnc);
dnc -= 500;
console.log(dnc);