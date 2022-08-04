const inputArr = ['rat', 'jar', 'tar', 'raj', 'ram', 'arm', 'mar', 'art'];

const groupAnagrans = (strs) => {
    let anagrams = {};
    let collectionAnagrams = [];
    
    for (let str of strs) {
        //sort letters
        let letters = str.split('').sort().join('');
        
        if (strs.hasOwnProperty(str)) {
            anagrams[letters] = anagrams[letter];
        } else {
            anagrams[letters] = [];
        }
        
        //add the value of the key to match its letter
        anagrams[letters].push(str);
    }
    
    for (let key in anagrams) {
        //add values as subarrays of the collected anagrams 
        collectionAnagrams.push(anagrams[key]);
    }
    
    return collectionAnagrams;
}

console.log(groupAnagrans(inputArr));