function renderInventory(inventory) {
//create a flat list string
let flatList = "";
//iterate over invertory 
for(let i=0; i < inventory.length; i++) {
    //create desinger object variable
    let designerObject = inventory[i];
    let shoes = designerObject.shoes;
    //console.log(designerObject.shoes);
    //for each shoe in the designer's Object shoe array
    for(let j =0; j < shoes.length; j++) {
    //add the designer name, shoe name, the shoe price and new line
    let currentShoe = shoes[j]
    flatList += renderCurrentString(designerObject.name, currentShoe.name, currentShoe.price);
    }    
}
//return a flat list string 
return flatList;
}

//Create helper functions if needed
function renderCurrentString(designerName, shoeName, shoePrice) {
return designerName + ', ' + shoeName + ', ' + shoePrice + '\n';
}
// assertion function 

function assertEqual(actual, expected, testName) {
if(actual === expected) {
    console.log('passed');
} else {
    console.log('Fail [' + testName + '] Expected  "' + expected + '", but got ' + actual + '"');
}
}

// test cases 

let currentInventory = [
{
    name: 'Brunello Cucinelli',
    shoes: [
    {name: 'tasselled black low-top lace-up', price: 1000},
    {name: 'tasselled green low-top lace-up', price: 1100},
    {name: 'plain beige suede moccasin', price: 950},
    {name: 'plain olive suede moccasin', price: 1050}
    ]
},
{
    name: 'Gucci',
    shoes: [
    {name: 'red leather laced sneakers', price: 800},
    {name: 'black leather laced sneakers', price: 900}
    ]
}
];

let actualFlatList = renderInventory(currentInventory);

let expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';

assertEqual(actualFlatList, expectedFlatList, "should return a flat list of current inventory");