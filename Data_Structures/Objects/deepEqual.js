// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

//input: two values (could be anthing)
  //need to determine type of
//output: boolean (true if value1 === value2)
//c: if both are object go deep!
 //e: //if value1 === null || value2 === null (return null)




let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

function deepEqual(value1, value2) {

    if (value1 === null || value2 === null) {
        return null;
    }
    if (typeof value1 === 'object' && typeof value2 === 'object') {
        var one = Object.values(value1);
        var two = Object.values(value2);
        for (var i = 0; i < one.length; i++) {
            if (one.length === two.length && one[i] === two[i]) {
                return true;
            }
        }
        return false;
    }
}
