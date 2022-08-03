const inputArr = ['rat', 'jar', 'tar', 'raj', 'ram', 'arm', 'mar', 'art'];

const groupAnagrans = (arr) => {
    const arrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let sortedInnerArr = [...arr[i]];
        sortedInnerArr.sort();
        sortedInnerArr = sortedInnerArr.join('');

        if (arrMap.has(sortedInnerArr)) {
            arrMap.get(sortedInnerArr).push(arr[i]);
        } else {
            arrMap.set(sortedInnerArr, [arr[i]]);
        };
    };
    return [...arrMap.values()];
}

console.log(groupAnagrans(inputArr));