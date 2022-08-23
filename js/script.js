// alert("hello world");
// prompt("hello world");
// document.write("jawad");
// console.log("jawad");
// console.log(5+6);
// alert(5+6);
// document.getElementById("head").style.color="red";

// 1.statements in java script(every line is a statement like in local languages)
/*  var a;
    a = 5;
    alert(a);
*/

// 2.Commments in java script (every thing inside the comment will be ignored by javascript and will not b executed)
// single line Comment
// x=5; 

// multiple line comments 
/*  var a;
    a = 5;
    alert(a);
*/

// 3.variables in javascript (variables are used for storing values. the values which will be reused further line in mathematics we give x=2 we are storing value 2 inside x and resuing it whereever we want eg.x+2)

/*Rules for declaring a variable 

    variable names must be inside single or double quotes
    Variable names cannot contain spaces.
    Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
    Variable names can only contain letters, numbers, underscores, or dollar signs.
    Variable names are case-sensitive.
    Certain words may not be used as variable names called reserved words, because they have other meanings within JavaScript.
*/

/*  var digit1 = 5;
    alert(digit1); 
*/
// whenever we are working with variable we should not use double/single quotes in alert as double quotes/single quotes are used for string 

/*  var digit1 = 6;
    var x = 2;
    var z = digit1 + x + 2;
    console.log(z);
*/
// var is the old method used for declaring/initializing variable.After ES6 let and const were introduce
/*  let digit1 =6;
    alert(digit1);
*/

// const is used for making a rule  --> in var & let we can change the value assigned to the variale but we cannot do the same for const
/*  price1=5;
    price2=6
    let = price1 + price2;
*/

/*  const digit2 = 6;
    digit2 =8;
    alert(digit2);
*/

// 4.operators in javascript

// The assignment operator (=) assigns a value to a variable.
// let x = 10;

// 1: The addition operator (+) adds numbers:
/*    let x = 5;
    let y = 3;

    // addition
    console.log('x + y = ', x + y);  // 8

    // subtraction
    console.log('x - y = ', x - y);  // 2

    // multiplication
    console.log('x * y = ', x * y);  // 15

    // division
    console.log('x / y = ', x / y);  // 1.6666666666666667

    // remainder
    console.log('x % y = ', x % y);   // 2

    // increment
    console.log('++x = ', ++x); // x is now 6
    console.log('x++ = ', x++); // prints 6 and then increased to 7
    console.log('x = ', x);     // 7

    // decrement
    console.log('--x = ', --x); // x is now 6
    console.log('x-- = ', x--); // prints 6 and then decreased to 5
    console.log('x = ', x);     // 5
*/

// 2: Comparison operators in JavaScript

// Why use == in JavaScript?
// Here are the important uses of == in JavaScript:
// The == operator is an equality operator. It checks whether its two operands are the same or not by changing expression from one data type to others. You can use == operator in order to compare the identity of two operands even though, they are not of a similar type.

// How === Works Exactly?
// Strict equality === checks that two values are the same or not.
// Value are not implicitly converted to some other value before comparison.
// If the variable values are of different types, then the values are considered as unequal.
// If the variable are of the same type, are not numeric, and have the same value, they are considered as equal.
// Lastly, If both variable values are numbers, they are considered equal if both are not NaN (Not a Number) and are the same value.

/*  //exponentiation
    console.log('x ** y =', x ** y);

    // equal operator
    console.log(2 == 2); // true
    console.log(2 == '3'); // true

    // not equal operator
    console.log(3 != 2); // true
    console.log('hello' != 'Hell'); // true

    // strict equal operator
    console.log(2 === 2); // true
    console.log(2 === '2'); // false

    // strict not equal operator
    console.log(2 !== '2'); // true
    console.log(2 !== 2); // false
*/

// 3: Logical Operators in JavaScript

/*  // logical AND
    console.log(true && true); // true
    console.log(true && false); // false

    // logical OR
    console.log(true || false); // true

    // logical NOT
    console.log(!true); // false

    // 4: String operators in JavaScript
    // concatenation operator
    console.log('hello' + 'world');

    let a = 'JavaScript';

    a += ' tutorial';  // a = a + ' tutorial';
    console.log(a);
*/

// 4: javascript operators 
    // 1)JavaScript String
    // String is used to store text. In JavaScript, strings are surrounded by quotes:

/*    Single quotes: 'Hello'
    Double quotes: "Hello"
    Backticks: `Hello`
    For example,

    //strings example
    const name = 'ram';
    const name1 = "hari";
    const result = `The names are ${name} and ${name1}`;
    Single quotes and double quotes are practically the same and you can use either of them.

    Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression} (template literal) as shown above.

    You will learn about the use of backticks in the JavaScript String tutorial.
*/

    // 2)JavaScript Number
    // Number represents integer and floating numbers (decimals and exponentials). For example,

/*     const number1 = 3;
    const number2 = 3.433;
    const number3 = 3e5 // 3 * 10^5
*/

    // 3)JavaScript Boolean
    // This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch. For example,
    
/*      x=2<3;
        alert(x);
*/
    // 4)JavaScript undefined

    // The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,
    
/*   let name;
    console.log(name); // undefined
*/

    // 5)JavaScript Object
    // An object is a complex data type that allows us to store collections of data. For example,
    
/*    const student = {
        firstName: 'ram',
        lastName: null,
        class: 10
    };
*/

// JavaScript typeof
// To find the type of a variable, you can use the typeof operator. For example,

/*    const name = 'ram';
    console.log(typeof(name)); // returns "string"

    const number = 4;
    console.log(typeof(number)); //returns "number"

    const valueChecked = true;
    console.log(typeof(valueChecked)); //returns "boolean"

    const a = null;
    console.log(typeof(a)); // returns "object"
*/

// Javascript condition statements
    // 1)if statement
/*  let age=18;
    if(age>=18){
        alert("you can vote");
        
   }
*/  

    // 2)if else Statement 
/*  let age=17;
    if(age>=18){
        alert("you can vote");
    }
    else{
        alert("you cannot vote");
    }
*/
    // 3)if else if Statement 
/*  let age=17;
    let hasVoterCard='no';

    if(age>=18 && hasVoterCard == 'yes'){
        alert("you can vote");
    }
    else if(age>=18 && hasVoterCard != 'yes'){
        alert("bring your voter card");
    }
    else{
        alert("you cannot vote");
    }
*/
    // 4)nested if 
/*  let age=18;
    let hasVoterCard='no';

    if(age>=18){
        if(hasVoterCard=='yes'){
            alert("you can vote")
        }
        else{
            alert("bring your voter card");
        }
    }
    else{
        alert("you cannot vote");
    }
*/
    // 5) ternary operator
/*  let isLoggedin = 0;
    let option = isLoggedin ==1 ? ("Logout") : ("Login");
        condition                   true        false
    document.write(option);
*/
// Nullish coalescing operator (??)

/*  let user;
    user="jawad";
    alert(user??"guest user");
*/

// switch case 

/*  input = "N";
    switch(input){
        case 1:
            document.write("Continue");
            break;
        case "y":
            document.write("continue");
            break;
        case "yes":
            document.write("continue");
            break;
        case 0:
            document.write("end");
            break;
        case "n":
            document.write("end");
            break;
        case "no":
            document.write("end");
            break;
        default:
            document.write("wrong input");
    }
*/
// WHILE LOOP

/*    let counter =1;
    while(counter<=10){
        document.write("JAWAD");
        counter++;
    }
*/

/*  let counter=1;
    let sum=0;

    while(counter<=100){
        if(counter%2 == 0){
            sum=sum+counter;
        }
        counter++;
    }
    document.write(sum);
*/

// Do WHILE LOOP (do while execute atleast one time even if the condition is not statisfied)
/*    let counter=12;
    do{
        document.write("jawad");
        counter++;
    }
    while(counter<=10);
*/

// FOR LOOP 
/*    for(let counter=1; counter <=10; counter++){
        document.write("jawad");
    }
*/

// BREAK, CONTINUE & NESTED LOOP 
/*   outer: for(let counter=1;counter<=10;counter++){
        if(counter==5){
            // break;
            continue;
        }
        if(counter==3){
            break;
        }
        document.write(counter);
        document.write('<br>');

        for(let counter2=1; counter2<3; counter2++){

            if(counter==3){
                break outer;
            }

            document.write('jawad');
            document.write('<br>');
        }
        document.write('<br>');
    }
*/
        
// alert() promt() confirm()-->user interaction functions
// 1.alert() - shows a message. 
/*
    alert("WELCOME");
*/

// 2. prompt() - shows a message, input Text. It returns the text on ok or, if cancel button is clicked, null.
/*
    let age=prompt("Enter Your Age",20);
    if(age != null){
        document.write(`your age is ${age}`);
    }
    else{
        document.write('no input entered');
    }
*/

// 3.confirm() - shows a message, confirm with "OK" or "Cancel". It returns true for OK and false for Cancel/esc.
/*
    let response=confirm("are you sure? you want to delete");
    if(response){
        document.write('deleted');
    }
    else{
        document.write('not deleted');
    }
*/

// Type Conversion in datatype 
    // let type=10;
    // let type="str";
    // let type=true;
    // let type=5+null;
    // let type = "5" + null;
    // let type = "5" + 2;
    // let type = "5" - 2;
    // let type = "5" - "2";
    // let type = "5" * 2;
    // let type = "5" * "2";
    // let type = "5" * "yes";
    // console.log(type);
    // console.log(typeof type);

    // let type = 4;
    // let type = true;
    // let type = false;
    // console.log(typeof type);
    // let NewType = String(type);
    // console.log(typeof NewType);
    // console.log(NewType);

    // let type = "abcde";
    // let type = true;
    // let type = false;
    // console.log(typeof type);
    // let NewType = Number(type);
    // console.log(typeof NewType);
    // console.log(NewType);

    // let type = 'abcde';
    // let type = "";
    // let type = 6;
    // let type = 0;
    // console.log(typeof type);
    // let NewType = Boolean(type);
    // console.log(typeof NewType);
    // console.log(NewType);

// STRING MANUPULATION 
    // let str1="hello";
    // let str2="world";
    // console.log(`Hi ${str1} ${str2}`);

    // let str="jawad shaikh";
    // let str1="BSCIT";
    // let str = "jawad \n shaikh";
    // let str = "jawad \t shaikh";
    // let str = "jawad \\ shaikh"
    // let str ="jawad\" shaikh";
    // let str ='i din\'t studied today';
    // console.log(str);
    // console.log(str.length);
    // console.log(str[4]);
    // console.log(str +" "+ str1);
/*  if("Jawad shaikh" == str){
        console.log("equal");
    }else{
        console.log("not equal");
    }
*/
/*
    let str="jawad";
    let str1="shaikh";
    let str3=str.concat(" ",str1);
    console.log(str3);
*/
    // let str = " I am learning javascript from sc//ratch ";
    // console.log(str.substr(14,10));             // (index,length)
    // console.log(str.substring(0,13));           // (index,index)
    // console.log(str.indexOf('javascript'));     // (position of the input string)
    // console.log(str.indexOf('h',15));           // (find position after specific index)
    // console.log(str.lastIndexOf('h'));          // (search from last)
    // console.log(str.indexOf('z'));              // (for searching word is present or not)
    // console.log(str);
    // console.log(str.trim());                    // (for removing wide space from start and end)
    // console.log(str.trimStart());               // (removing wide space from start)
    // console.log(str.trimEnd());                 // (removing wide space from end)
    // console.log(str.toUpperCase());             // (transforming to upper case)
    // console.log(str.toLocaleLowerCase());       // (transforming to lower case)
    // console.log(str.replace('javascript','bootstrap')); // (replacing string)
    // console.log(str.includes('html'));           //   (for searching string and returning value false if absent)
    // console.log(str.includes('javascript'));     //   (for searching string and returning value true if presents)

    // ARRAY IN JAVASCRIPT 
    // let books = ["physcis","chemistry","maths","bio"];
    // let books = new Array("physcis","chemistry","maths","bio");
    // let marks = [44, 21, 32, 40]
    // let marks = [44, 21,"english", 32, 40.2]
    // books[1]="hindi";
    // console.log(books);
    // console.log(books[3]);
    // console.log(marks[2]);

    // OPERATIOS ON ARRAY 
    // let books = ["physics","chemistry","maths","bio"]
    // let books1 =['hindi', 'english']
    // let books ="math";
    // console.log(books.length);          // (length of array)
    // books.push("hindi");                // (add at the end)
    // books.unshift("hindi");             // (add at start)
    // books.pop();                        // (removes the last element--> we can use pop again and again each will remove last element every time)
    // books.shift();                      // (removes first element--> we can use shift again and again each will remove first element every time)
    // books.splice(1,2);                  // (index,position -> removes element from the specific index to specific position)
    // books=[];                           // (empty array)
    // books.length=0;                     // (empty Array)
    // console.log(books.indexOf("bio"));  // (finding position of array)
    // console.log(Array.isArray(books));  // (to check is array or not)
    // let text = "This is a random array";
    // wordarry = text.split(' ');         // (converting text/string into array)    
    // console.log(books.join(' '));       // (converting array to text)
    // console.log(wordarry);      
    // let NewBook = books.concat(books1);      //(concating 2 arrays)
    // console.log(NewBook);

    // TWO DIMENTIONAL ARRAY 
    
    // let books=['physics', 'chemistry', 'maths', 'bio'];            //  (one dimentional array)
    // let bookwithpages=[["physics","300"],                           // (two dimentional array)
        //  ["chemistry", ["200", "300"], ["500", "jawad", "shaikh"]],
        //  ["maths", "150"],
        //  ["bio", "250"]
    // ];

    // let fetch =bookwithpages[3];
    // let fetch = bookwithpages[3][1];
    // let fetch = bookwithpages[1][1][0];
    // let fetch = bookwithpages[1][2][1];
    // console.log(fetch);

    // let book=['physics', 'chemistry', 'maths', 'bio'];

    // let booklength = book.length;
    // for(i=0; i< booklength; i++){
        // console.log(`element ${i} is ${book[i]}`);
    // }
    
    // book.forEach(myfun);
     
    // function myfun(value){
        // console.log(value);
    // }
    
// FUNCTIONS IN JAVSCRIPT (functions are used for code reuseability) 
    
    // for(i=1; i<=10; i++){
    //     document.write(`2 x ${i} = ${2*i} <br>`);
    // }

    // function table(){
    //     for(i=1; i<=10; i++){
    //         document.write(`2 x ${i} = ${2*i} <br>`);
    //     }   
    // }

    // table();
    // table();
    // table();
    // table();
    // table();
    // table();

    // PARAMETERS AND ARGUMENTS

    // function table(num){
    //         for(i=1; i<=10; i++){
    //             document.write(`${num} x ${i} = ${num*i} <br>`);
    //         }   
    //     }
    
    // table(1);
    // document.write('<br>');
    // table(3);
    // document.write('<br>');
    // table(5);
    // document.write('<br>');
    // table(7);
    // document.write('<br>');
    // table(9);
    // document.write('<br>');
    // table(11);
    
    // function add(num1,num2){
    //     document.write(num1+num2);
    // }
    // add(1,1);

    // ARGUMENTS OBJECT 

    // function add(){
        // console.log(arguments.length);
        // console.log(arguments);
        // console.log(arguments[3]);
    //     if(arguments.length==0){
    //         console.log("no arguments passed");
    //     }
    //     else{
    //         let sum=0;
    //         for(i=0;i<arguments.length; i++){
    //             sum = sum + arguments[i];
    //         }
    //         console.log(sum);
    //     }
    // }

    // add(1);
    // add(1,2);
    // add(1,2,5);
    // let addition = add;
    // addition(1,2,5);

    // RETURNING A VALUE IN FUNCTION
    // function add(a,b){
        // console.log(`${a+b}`);
        // document.write(a+b);
        // let d = a + b;
        // let d = [2,3,4];
        // return d;
    //     if(a>b){
    //         return 1;
    //     }       
    //     else if(b>a){
    //         return -1;
    //     }
    //     else{
    //         return 0;
    //     }
    // }
    // let c = add(5,5);
    // console.log(c);

    // GLOBAL VARIABLE VS LOCAL VARIABLE 

    // let car = "Audi"; //global variable
    // function add(){
        // let result = 33; //local variable
        // console.log(result);
        // console.log(car);
    // }

    // add();
    // console.log(result);
    
    //ANONYMOUS FUNCTION

    // let text = function(){
    //     console.log("Hello World!");
    // }
    // text();

    // // setTimeout(text,3000);
    // setTimeout(function(){
    //     console.log("Hello World!");
    // },3000);

    //IMEDIATELY INVOKED FUNCTION  // use and free memory
    // (function (){
    //     console.log("hello world");
    //     alert("hello world")
    // })();

    // let msg ="hello bootstrap";

    // function show(){
    //     console.log(msg);
    // }

    // show();

    // OBJECTS IN JAVASCRIPT 

    // let person = {
    //     firstName: 'jawad',
    //     lastName: 'shaikh'
    // };

    //using new keyword
    // let person = new Object;
    // person.name = "jawad";
    // console.log(person.name);

    // person.height = 5.2;                            //adding new object
    // delete person.lastName;                         //deleting property
    // console.log(person.firstName);
    // console.log(person.lastName);                   // dot notation
    // console.log(person['firstName']);               // array notation
    // console.log(person.age);                        // undefined
    // console.log(person);                        
    // firstName = 'faiz';
    // console.log(firstName);                        // modification
    // console.log('age' in person);                  // checking propery is there or not (tru/false)            

    // for(let key in person){
    //     console.log(key+": "+person[key]);         // accessing all the properties
    // }

    // METHODS IN JAVASCRIPT

    // let person = {
            // firstName: 'jawad',
            // lastName: 'shaikh',
            // sayHello:  function(){
            //             console.log("Hello");
            //     },
    //         sayHello () {
    //                         console.log("Hello i am "+this.firstName +" and i have a " + car.brand +" car");
    //                 }            
    // };
    // person.height = 5.2;
    // person.sayHello = function(){
    //         console.log("Hello");
    // }
    // function greet(){
    //     console.log("hello!");
    // }
    // person.sayHello =  greet;

    // let car = {
        // brand:'tata',
        // model:'safari'
    // };

    // person.sayHello();

    // console.log(Math.PI);
    // console.log(Math.E);    
    // console.log(Math.round(4.7));    
    // console.log(Math.round(4.2));    
    // console.log(Math.ceil(4.1));
    // console.log(Math.floor(4.9));
    // console.log(Math.trunc(4.8));
    // console.log(Math.pow(2,3));
    // console.log(Math.sqrt(100));
    // console.log(Math.min(4, 100, 1, 0.9));
    // console.log(Math.max(100, 200, 500, 50));

    // RANDOM NUMBER 
    // console.log(Math.floor(Math.random()*11));     //0 to 10
    // console.log(Math.floor(Math.random()*11))+1;     //1 to 10
    // console.log(Math.floor(Math.random()*101));     //0 to 100
    // console.log(Math.floor(Math.random()*1001));     //0 to 1000
    // console.log(Math.floor(Math.random()*10001));     //0 to 10000
    // var randomNumber = Math.floor(Math.random()*(25 - 15)) + 15;
    // console.log(Math.floor(Math.random()*(25 - 15)) + 15);

    // function getRandom(max, min){
    // let x =Math.floor(Math.random()*(max- min + 1)) + min;
    // return x;
    // }

    // console.log(getRandom(10,25));
    // let x = new Date();
    // let x = new Date("june 28, 2002 10:02:59");
    // console.log(x);
    // console.log(x.getDate());
    // console.log(x.getDay());
    // console.log(x.getMonth());
    // console.log(x.getTime());
    // console.log(x.getHours());
    // console.log(x.getMinutes());
    // console.log(x.getSeconds());
    // console.log(x.setDate("12 october, 2003 10:20:30"));
    // x.setDate(13);
    // x.setFullYear(2005);
    // x.setMonth(0);
    // x.setMinutes(1);
    // let y = new Date("june 28, 2002 10:02:59");
    // y.setDate(x.getDate()+50);
    // console.log(x);    
    // console.log(y);

    // let x = new Date("june 28, 2023 10:02:59");
    // let y = new Date();

    // if(x<y){
    //     console.log("x is past date");
    // }else if(x > y){
    //     console.log("y is future date");
    // }
    // else{
    //     console.log("dates are same");
    // }

    // GETTER AND SETTER FUNCTION 
    // var person = {
        // name : "jawad",
        // age : "19",

        // getname: function(){
        //     return this.name.toUpperCase();
        // },
        
        // get getname(){
        //     return this.name.toUpperCase();
        // },

        // set setname(n){
            // this.name = n.toUpperCase();
        // }
    // }
    // person.setname = "jawad";
    // console.log(person.name);
    // console.log(person.getname());
    // console.log(person.getname);
    // console.log(person);

    // object constructor 
    // var student1 = {
    //     firstName : "jawad",
    //     lastName : "shaikh",
    //     age : 25,
    //     class:5
    // }    

    // var student2 = {
    //     firstName : "shaikh",
    //     lastName : "kumar",
    //     age : 25,
    //     class:5
    // }    

    // function Student(first, last, age, cls){
    //     this.firstName = first;
    //     this.LasttName = last;
    //     this.age = age;
    //     this.class = cls;
    // }

    // var student1 = new Student("JAWAD", "SHAIKH", "19", "5");
    // student1.nationality = "Indian";
    // student1.name = function(){
    //     return this.firstName + " " + this.LasttName;
    // }
    // Student.prototype.nationality = "Indian";
    // var Student2 = new Student("FAIZ", "SHAIKH", "28", "5");
    // var Student3 = new Student("HAMZA", "SHAIKH", "25", "5");
    // console.log(student1.name());
    // console.log(student1.nationality);
    
    //NESTED OBJECT
    // var user = {
    //     id:101,
    //     email: "shaikhjawad020@gmail.com",
    //     personalInfo: {
    //         name: "jawad",
    //         address: {
    //             street:"homi street",
    //             city:"mumbai",
    //             country:"india",
    //         }
    //     }
    // };
    // console.log(user.personalInfo.address.country);


    //Hoisting (to left to pull)-->declaration up
    // hello();
    // function hello(){
    //     console.log("Hello World");
    // }
    
    // var x;
    // console.log(x); //undefined
    // x=7;

    // x = 7;
    // console.log(x);
    // var x;

    // console.log(x);
    // x=7;
    // var x;  

    // console.log(x); //error let const does not work same 
    // let x;
    // x = 7;
    // "use strict" // without declartion we cannot use variable
    // x = 4;
    // console.log(x);