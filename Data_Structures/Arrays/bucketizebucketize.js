function bucketize(phrase, n) {
	
	var phraseArr = phrase.split(' ');
	var outputArray = [];
	var bucket = "";
	
	for(var i = 0; i < phraseArr.length; i ++){
		if(phraseArr[i].length > n){
			return [];
		}
		
		if(bucket.length + phraseArr[i].length < n){
			if(bucket.length !== 0){
				bucket += ' ';
			}
			bucket += phraseArr[i];
		}
		else{
			if(bucket.length !== 0){
				outputArray.push(bucket);
			}
			bucket = phraseArr[i];
				
		}
	}
	outputArray.push(bucket);
	return outputArray;
}
