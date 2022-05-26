function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
    var string = '';
    string += this.parenthesize(this.getAreaCode());
    string += " ";
    string += this.getExchangeCode();
    string += "-"
    string += this.getLineNumber();
    return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
    return this.slice(0,3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
    return this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
    return this.slice(6,);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
    return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
    return this.numbers.slice(start, end).join('');
};

//create a new instance of phone number formatter

var formatter = new PhoneNumberFormatter([1,1,1,8,6,7,5,3,0,9]);

var formattedNumber = formatter.render();
console.log(formattedNumber);

//var lineCode = formatter.getLineNumber(6,);
//console.log('ExchangeCode: ', lineCode) 