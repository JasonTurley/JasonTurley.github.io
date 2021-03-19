// Source for turkey facts: https://www.smithsonianmag.com/science-nature/14-fun-facts-about-turkeys-665520/

fact = document.getElementById("fact");
fact_list = [
	"There are six subspecies of wild turkey, all native to North America",
	"Male turkeys are called 'gobblers'",
	"Female turkeys are called 'hens'",
	"Baby turkeys are called poults",
	"Turkeys can run at speeds of up to 25 miles per hour and fly as fast as 55 miles per hour",
	"Baby turkeys eat berries, seeds, and insects",
	"Adult turkeys have a more varied diet that can include acorns and even small reptiles"
];

// Displays a random fact from the list
function displayTurkeyFact() {
	index = Math.floor(Math.random() * fact_list.length);
	fact.innerHTML = fact_list[index];
}

fact.addEventListener("load", displayTurkeyFact());
