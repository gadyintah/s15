console.log("hello world")



//Assignment Operator (=)

let assignmentNumber = 8;


//Addition Assignment Operator (+=)


assignmentNumber = assignmentNumber + 2;
console.log(assignmentNumber); //10

assignmentNumber += 2;
console.log(assignmentNumber); //12

//Subtraction/Multiplication/division assignment operator(-=, *=, /=)
assignmentNumber -= 2;
assignmentNumber *= 2;
assignmentNumber /= 2;


//Arithmetic Operators (+, -, *, /, %)
//PEMDAS RULE

let mdas = 1 + 2 - 3 * 4 / 5;
console.log("Result of mdas operation" + mdas); 

let pemdas = 1 + (2 - 3) * (4 / 5);
console.log("Result of pemdas operation" + pemdas);

//Increment and Decrement 
let z = 1;
//Pre-fix Incrementation
++z
console.log(z); //2

//Post-fix Incrementation
//returns the previous value of the variable and add 1 to its actual value
z++ 
console.log(z); //3

console.log(z++); //3
console.log(z); //4

console.log(++z); //5 - the new value is returned immediately

//Pre-fix Decrementation and Post-fix Decrementation
console.log(--z); //4 - pre-fix
console.log(z--); //4 - post-fix
console.log(z)



//Type Coercion
//is the automatic or implicit conversion of values from one data type to another

let numA = '10';
let numB = 12;

let coercion = numA + numB;
console.log(coercion); 
console.log(typeof coercion); 
//Adding/Concatenating a string and a number will result to a string

let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(nonCoercion)
//The result is a number

let numE = true + 1;
console.log(numE);
console.log(typeof numE);
//The result is a number
//The boolean "true" is associated with the value of 1


let numF = false + 1;
console.log(numF); //1
//The boolean "false" is associated with the value of 0


//Comparison Operators
//(==) Equality Operator
let juan = 'juan';

console.log("Equality Operator")
console.log(1 == 1); //true
console.log(1 == 2); //false
console.log(1 == '1'); //true
console.log(0 == false); //true
console.log('juan' == 'JUAN'); //false - case sensitive
console.log('juan' == juan); //true

//(===) Strict Equality Operator
console.log("Stric Equality Operator")
console.log(1 === 1); //true
console.log(1 === 2); //false
console.log(1 === '1'); //false - data type
console.log(0 === false); //false - number and a boolean
console.log('juan' === 'JUAN'); //false - case sensitive
console.log('juan' === juan); //true

//(!=) Inequality Operator
console.log("Inequality Operator")
console.log(1 != 1); //false
console.log(1 != 2); //true
console.log(1 != '1'); //false
console.log(0 != false); //false
console.log('juan' != 'JUAN'); //true - case sensitive
console.log('juan' != juan); //false

//(!==) Stric Inequality Operator
console.log("Strict Inequality Operator")
console.log(1 !== 1); //false
console.log(1 !== 2); //true
console.log(1 !== '1'); //true
console.log(0 !== false); //true
console.log('juan' !== 'JUAN'); //true - case sensitive
console.log('juan' !== juan); //false


//Relational Comparison Operator
let x = 500;
let y = 700;
let w = 8000;
let numString = "5500";

//Greatan Than (>)
console.log("Greater than")
console.log(x > y); //false

//Less Than (<)
console.log("Less Than")
console.log(y < y); //false
console.log(numString < 6000); //true - forced/type coercion to change string to a number
console.log(numString < 1000); //false

//Greater than or Equal to
console.log("Greater than or Equal to")
console.log(w >= w); //true

//Less than or Equal to
console.log("Less than or Equal to")
console.log(y <= y); //true


//Logical Operators (&&, ||, !)

let isAdmin = false;
let isRegistered = true;
let isLegalAge = true;

//Logical AND Operator (&& - Double Ampersand)
console.log("Logical AND Operator")
//return true if ALL operands are true
let authorization1 = isAdmin && isRegistered;
console.log(authorization1); //false

let authorization2 = isLegalAge && isRegistered;
console.log(authorization2); //true

let requiredLevel = 95;
let requiredAge = 18;

let authorization3 = isRegistered && requiredLevel === 95 && isLegalAge;
console.log(authorization3); //true


//Logical OR Operator (|| - Double Pipe)
//return true if atleast ONE of the operands are true.
console.log("OR Operator")

let userLevel = 100;
let userLevel2 = 65;

let userAge = 15;

let guildRequirment1 = isRegistered || userLevel2 >= requiredLevel || userAge >= requiredAge;

console.log(guildRequirment1); //TRUE

//Not Operator (!)
console.log("Not Operator")
//turns a boolean into the opposit value

let opposite = !isAdmin;
console.log(opposite); //true - isAdmin original value is false
console.log(!isRegistered);



//if else if and if statement


function login(username, password){
	if(typeof username === "string" && typeof password === "string"){
		console.log("username: " + username + ", " + "password: " + password);
		if(username.length >= 8 && password.length >= 8){
			console.log("Thank you for logging in");
		}
		else if(username.length < 8 && password.length >= 8){
			console.log("Username is too short");
		}
		else if(password.length < 8 && username.length >= 8){
			console.log("Password is too short");
		}
		else{
			console.log("Credentials too short")
		}
	}
}

login("isAbleToLogin", "isAbleToLogin");
login("!Login", "!Login");
login("!Login", "isAbleToLogin");
login("isAbleToLogin", "!Login")



// Mini Activity

// add another condition to our nested if statement:
//         -check if the username and password is atleast 8 characters long.
//         -alert - "Thank you fo loggin in"
// add and else statement which will run if both conditions were not met:
//         -show an alert message says "Credentials too short"


// Stretch Goals:

// add an else if statement that if the username is less than 8 characters
//         -show an alert "Username is too short"
// add an else if statement that if the password is less than 8 characters
//         -show an alert "password too shore"

//         video/screenshot the ouput


//function with return keyword

let message = 'No message.';
console.log(message)

function determineTyphoonIntensity(windSpeed) {
	if (windSpeed < 30) {
		return 'Not a typhoon yet.';
	} 
	else if (windSpeed <= 61) {
		return 'Tropical depression detected.';
	}
	else if(windSpeed >= 62 && windSpeed <= 88){
		return 'Tropical storm detected.';
	}
	else if (windSpeed >= 89 && windSpeed <= 117) {
		return 'Severe tropical storm detected.';
	} 
	else {
		return 'Typhoon detected.'
	}
}

message = determineTyphoonIntensity(68);
console.log(message); //


if(message == 'Tropical storm detected.'){
	console.warn(message);
}

//console.warn is a good way to print warnings in our console that could help us developers act on a certain output within our code

//Truthy and Falsy
//false(undefined, null, "", NaN, -0)
if (0) {
	console.log("Truthy")
}

let fName = "jane";
let mName = "doe";
let lName = "smith";


console.log(fName + " " + mName + " " + lName)

//Template literals(ES6)

console.log(`${fName} ${mName} ${lName}`)

//Ternary Operator (ES6)
/*
Syntax: 
	(expression/condition) ? ifTrue : ifFalse;
	expression/condition ? ifTrue : ifFalse;



*/
//Single statement execution

let ternaryResult = (1 < 18) ? true : false;
console.log(ternaryResult);


5000 > 1000 ? console.log("price is over 1000") : console.log("Price is less than 1000");



//Else if  with ternary operator

let a = 7;


a === 5
? console.log("A")
: (a === 10 ? console.log("A is 10") : console.log("A is not 5 or 10"))

//Multiple statement execution
let name;

function isOfLegalAge() {
	name = 'John';
	return 'You are of the legal age limit'
}

function isUnderAge() {
	name = 'Jane';
	return 'You are under the age limit'
}

let age = parseInt(prompt("What is your age?"));
console.log(age)

let legalAge = (age > 18) ? isOfLegalAge() : isUnderAge();
console.log(`Result of the ternary operator in functions: ${legalAge}, ${name}`);


