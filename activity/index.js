console.log("HELLO WORLD!");

firstNumber = parseInt(prompt("Input first number: "));
secondNumber = parseInt(prompt("Input second number: "));

if( (firstNumber + secondNumber) < 10 ){
	console.warn(firstNumber + secondNumber);
}
else if( (firstNumber + secondNumber) >= 10 && (firstNumber + secondNumber) <= 20 ){
	alert(firstNumber - secondNumber);
	console.log(firstNumber - secondNumber);
}
else if( (firstNumber + secondNumber) >= 21 && (firstNumber + secondNumber) <= 30 ){
	alert(firstNumber * secondNumber);
	console.log(firstNumber * secondNumber);
}
else if( (firstNumber + secondNumber) >= 31){
	alert(firstNumber / secondNumber);
	console.log(firstNumber / secondNumber);
}


userName = prompt("Input your name: ");
age = prompt("Input your age: ");

if(userName == "" && age == ""){
	alert("Are you a time traveler?");
}
else if(userName != "" && age != ""){
	alert(`User's name is ${userName} and user's age is ${age}`);
	isLegalAge(age);
}



function isLegalAge(age){
	if(age >= 18){
		alert("You are of legal age.");
	}
	else if(age < 18){
		alert("You are not allowed here.");
	}
}

console.log(age);

switch(parseInt(age)){
	case 18:
		console.log("You are now allowed to party.");
		break;
	case 21:
		console.log("You are now part of the adult society.");
		break;
	case 65:
		console.log("We thank you for your contribution to society");
		break;
	default:
		console.log("Are you sure you're not an alien?");
		break;
}


try{
	alerta(Blabla);
}
catch(error){
	console.warn(error);
}
finally{
	isLegalAge(age);
}