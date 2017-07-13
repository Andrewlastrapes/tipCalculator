



function totalAmount(bill, service) {
	if (service == "good") {
	var good_tip = bill * .2;
		return("Your total bill is: $" + (bill + good_tip).toFixed(2))
	} else if (service == "fair"){
		var fair_tip = bill * .15
		return("Your total bill is: $" + (bill + fair_tip).toFixed(2))
	} else if (service == "bad") {
		var bad_tip = bill * .2
		return("Your total bill is: $" + (bill + bad_tip).toFixed(2))
	}
}

console.log(totalAmount(233.23, "fair"))
console.log(totalAmount(11.23, "good"))
console.log(totalAmount(9.3, "bad"))

