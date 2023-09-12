const nameOnPass ="Arthur"; 
console.log("passenger Name: " + nameOnPass);

const nameOnId = "Bob";
const nameMatch = nameOnPass === nameOnId;
console.log("Id confirmed? "+ nameMatch);

const length = 60;
const doesLengthPass = (length < 30);

const height = 75;
const doesHeightPass = height < 55;
const isHandBaggageEligible = doesLengthPass && doesHeightPass;
console.log("Is Hand Baggage Eligible? " + isHandBaggageEligible);

const flightDes = "new york city";
const returnFrom = flightDes;
const isRoundTrip = flightDes === returnFrom;
console.log("Round Trip Check? " + isRoundTrip);

const bookings = 100;
const totalCapacity = 80;
const isFlightAvailable = bookings < totalCapacity;
console.log("Are seats available? " + isFlightAvailable);

document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;
