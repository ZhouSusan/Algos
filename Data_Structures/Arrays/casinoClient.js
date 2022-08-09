function cardCounter(array) {
    //console.log(array);
     var count = 0;
     //console.log('count: ', count);
     for (var i = 0; i < array.length; i++) {
         //console.log('current card object: ', array[i]);
         var card = array[i];
          //console.log('current card: ', card);
          for (var key in card) {
            var cardNum = key;
          }
          console.log(card[key]);
         if (card[key] >= 2 && card[key] <= 6) {
             count++;
             console.log('current card :' ,card[key]);
             console.log(count);
             //console.log('card.card: ' ,card.card + i);
         } else if (card[key] >= 10 || card[key]  === 'face or ace') {
             count--;
         }
     }
      return count;
 }
 
 function assertEquals(actual, expected, testDescription) {
     if (actual !== expected) {
         console.log('Test failed:', testDescription);
         return;
     }
     console.log('test passed');
     return;
 }
 
 var dealtCards = [ { 'card 0': 2 }, { 'card 1': 6 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];
 
 var actual = cardCounter(dealtCards);
 var expected = 1;
 assertEquals(actual, expected, 'function should return correct HiLo count.');
 
 var dealtCards2 = [ { 'card 0': 'face or ace' }, { 'card 1': 9 }, { 'card 2': 8 }, { 'card 3': 'face or ace' } ];
 
 var actual2 = cardCounter(dealtCards2);
 var expected2 = -2;
 assertEquals(actual2, expected2, 'function should return correct HiLo count.');