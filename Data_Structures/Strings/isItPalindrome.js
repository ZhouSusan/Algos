//create a function isItPalindrome that takes in one 
//text(string) and determine if it is a palindrome. 

function isItPalindrome(text) {
	text = text.toLowerCase();
	let reverseText = text.split("").reverse("").join("");
	return text === reverseText;
}

isItPalindrome('eye');//true
isItPalindrome("never ODdo Reven");//true 
isItPalindrome("Step on no pets");//true
isItPalindrome('eStesTs');//false
isItPalindrome('refer to Front desK');//false