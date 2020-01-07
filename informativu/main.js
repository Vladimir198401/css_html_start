// Kintameji
var message; // a-z , A - Z, 0-9, $, _
var myMessage;
myMessage = "zinutes";

var myNumber = 10.484;
var myString = "sveikas, kolia" //  "10.484"
var myBoolean = true; // false
var myNull = null;
var myUndefined = undefined;


 //alert("hello world!");

//Skaiciavimas

console.log(40 + myNumber);
console.log(40 - myNumber);
console.log(40 / myNumber);
console.log(40 * myNumber);

myNumber--;

console.log(myNumber);
console.log(Math.round(5.65));
console.log(Math.floor(5.65));

var newNumber = 2.457;
console.log(newNumber.toFixed(1));

//Masivai

var names = ["kolia","petia","vasia","sania"];
console.log(names[1]);

names.push("sveta");

console.log(names);


//saligos

if("5" <= 6) {
	console.log("taip sk daug");
}
if("5" == 5) {
	console.log("taip sk lig");
}

		if("5" === 6) {
			console.log("taip ligu?");
		}

if("vasia" != "petia" && myNumber < 20) {
	console.log("taip ne toks vardas ir taip maziau uz 20");
}

if("vasia" != "petia" || myNumber > 20) {
	console.log("taip ne toks vardas arba taip maziau uz 20");
}

if(myNumber < 20){
	console.log("skaicius maziau uz 20");
}else{
	console.log("skaicius daugiau uz 20");
}

//ciklai

for(var i = 0; i < 10; i++) {


	if(i==5){
		break;
			
	}
		console.log(i);
}

for(var a = 0; a < 10; a++) {
	

	if (a==5){
		continue;
		
	}
		console.log(a);
}

for(var j = 0; j < names.length; j++) {
		console.log(names[j]);

}

var b=0;
while (b <10){
	console.log(b);
	b++;
}

//funkcija

function skaiciuoti(x, y) {
	console.log(x + y);
}
skaiciuoti(20,34);

function skaiciuoti(x, y) {
	return x + y;
}
console.log(skaiciuoti(20,34));
console.log(skaiciuoti(20,44));

//objektai

var myObject = {
	name: "kolia" ,
	surname: "kolianin" ,
	age: 25,
	getFullName: function() {
		return this.name + ' ' +this.surname;
	}
};
myObject.name = "petia";

console.log(myObject.name);
console.log(myObject.getFullName());