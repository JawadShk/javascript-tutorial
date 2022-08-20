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
    // let str = " I am learning javascript from scratch ";
    // console.log(str.substr(14,10));              (index,length)
    // console.log(str.substring(0,13));            (index,index)
    // console.log(str.indexOf('javascript'));      (position of the input string)
    // console.log(str.indexOf('h',15));            (find position after specific index)
    // console.log(str.lastIndexOf('h'));           (search from last)
    // console.log(str.indexOf('z'));               (for searching word is present or not)
    // console.log(str);
    // console.log(str.trim());                     (for removing wide space from start and end)
    // console.log(str.trimStart());                (removing wide space from start)
    // console.log(str.trimEnd());                  (removing wide space from end)
    // console.log(str.toUpperCase());              (transforming to upper case)
    // console.log(str.toLocaleLowerCase());        (transforming to lower case)
    // console.log(str.replace('javascript','bootstrap')); (replacing string)
    // console.log(str.includes('html'));               (for searching string and returning value false if absent)
    // console.log(str.includes('javascript'));         (for searching string and returning value true if presents)

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
    let books = ["physics","chemistry","maths","bio"]
    let books1 =['hindi', 'english']
    // let books ="math";
    // console.log(books.length);           (length of array)
    // books.push("hindi");                 (add at the end)
    // books.unshift("hindi");              (add at start)
    // books.pop();                         (removes the last element--> we can use pop again and again each will remove last element every time)
    // books.shift();                       (removes first element--> we can use shift again and again each will remove first element every time)
    // books.splice(1,2);                   (index,position -> removes element from the specific index to specific position)
    // books=[];                            (empty array)
    // books.length=0;                      (empty Array)
    // console.log(books.indexOf("bio"));   (finding position of array)
    // console.log(Array.isArray(books));   (to check is array or not)
    // let text = "This is a random array";
    // wordarry = text.split(' ');          (converting text/string into array)    
    // console.log(books.join(' '));        (converting array to text)
    // console.log(wordarry);      
    // let NewBook = books.concat(books1);      (concating 2 arrays)
    // console.log(NewBook);

    
