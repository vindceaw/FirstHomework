//Section 1
/*1. DRY stands for Don't repeat yourself and we should pay attention to as we should refactor codes by taking something done several times and turn into loop or function. Tools we learn to write DRY code javascript.*/
/*2. const and let are block scoped while var declarations are globally scoped or function scoped. const cannot be updated or re-declared, let variables can up updated but no re-declared; and var variables can be updated and re-declared within its scope. const must ve initialized during declaration while var and let can be declared without being initialized.*/

//Section 2
// a < b
// c > d
// 'Name' === 'Name'
// a < b + c
// a < a + d
// e == 'Kelvin"
// f != e
let g = 0;
console.log(g);
const b = 53;
const c = 57;
g = b + c;
console.log(g);  
// i use let variable because it can be updated but not re-declared.
// nothing happened when i did not use var, let or const.
// syntax error mentioning left-assignment

//Section 3

//Infinite Loop?
// the code shown is a infinite loop because the while loop will continue to executes as long as the condition is true and there is no 'break' statement for jumping out of the loop.

//Infinite Loop II
// Code shown is not infinite loop. runProgram was initialized as true when in while loop, it remained as true and hence program prints out "Do not run this loop" once and the variable becomes false after, allowing breaking of loop

//Reading Code

let letters = "A";
let i = 0;
//start a while loop that will run as long as i is less than 20
while (i < 20) {
    // increments variable letter with additional "A"
	letters += "A";
    // increments the value of i by 1
	i++;
    //closes the while loop, the code inside this loop will keep running  until the while condition is evaluated to false
}
//prints the value of letters  to the screen/terminal window
console.log(letters);

//expected result : "AAAAAAAAAAAAAAAAAAAAA"
//Result is same as my expected result.

//For loops

//A while loop will perform the same code repetitively as long as the condition remains true (until the condition becomes false) while for loop starts with initial expression; condition; increment or decrement expression. For loop is great when user knows the exact number of times to loop through something. 

//For loop control panel

//The first part of the control panel is: let i = 0
//The second part of the control panel is: i < 100 
//The third part of the control panel is: i++

//For loop II

for (i=0; i < 1000; i++) {
    console.log(i);
}

//Bonus Challenge (optional):

//backslash is used when needing to search for special characters [ \ ^ $ . | ? * + ( ) and done so by prepending them with a backslash.  literally, we need to prepend them with a backslash \ (“escape them”). We also need to escape / if we’re inside /.../ (but not inside new RegExp).When passing a string to new RegExp, we need to double backslashes \\, cause string quotes consume one of them.

// \ is found in the string in front of the ' of word today's' so that it will not be seen as closing quote of the string. 

//For loop in reverse

for (i=999; i >=0; i--) {
    console.log(i);
}

//More counting

for (i = 1; i < 11; i++){
    console.log("The value of i is: " + i + " of 10");
}

//Bonus Challenge (optional):

for (i = 1; i < 11; i++){
    console.log(`The value of i is: ${i} of 10`);
}

//Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i = 0; i< StarWars.length; i ++){
    console.log(StarWars[i]);
}

for (i = 0; i< StarWars.length; i ++){
    console.log(`${StarWars[i]} , ${i}`);
}

//Bonus Challenge (optional):

for (i = 0; i< StarWars.length; i += 2){
    console.log(StarWars[i]);
}
