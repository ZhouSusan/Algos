function calculateAveragePricePerDesigner(inventory) {

    //create result object
    let result = {
      designers: []
    };
    //iterate over the inventory
       //create a few alias
      //create averagePricePerDesigner object
      //create a name property to the current designer name 
      //create an avgeragePrice property by calling 'getAveragePrice' function
      //push averagePricePerDesigner to result.designer(array)
    for(let i=0; i<inventory.length; i++) {
      let designerObject = inventory[i];
      let shoes = designerObject.shoes; 
  
      let averagePricePerDesigner = {};
      averagePricePerDesigner.name = designerObject.name;
      averagePricePerDesigner.averagePrice = getAveragePrice(shoes);
      result.designers.push(averagePricePerDesigner);
    }
    // return the result object 
    return result;
  }
  
  function getAveragePrice(arrayOfShoesObjects) {
    // create sum variable
    let sum = 0;
    // iterate over shoes array
    for (let j = 0; j < arrayOfShoesObjects.length; j++) {
      // add to the sum the price of each shoe
      sum += arrayOfShoesObjects[j].price;
    }
    // return sum variable
    return sum/arrayOfShoesObjects.length;
  }  
  
  //assertion function 
  function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if(actual === expected) {
      console.log('passed');
    } else {
      console.log('FAIL [' + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  // test cases 
  var currentInventory = [
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
  
  var actualOutput = calculateAveragePricePerDesigner(currentInventory);
  
  var expectedOutput = {
    'designers': [
      {
        'name': 'Brunello Cucinelli',
        'averagePrice': 1025
      },
      {
        'name': 'Gucci',
        'averagePrice': 850
      }
    ]
  };
  
  assertObjectsEqual(actualOutput, expectedOutput, "should return the object in correct format");