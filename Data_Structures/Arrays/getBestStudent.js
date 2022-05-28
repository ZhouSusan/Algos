function getBestStudent(grades) {
	if (grades.length === 0){return "";}
	let students  = Object.keys(grades);
	let maximumAverage  = 0;
	let bestStudent  = students[0];
	for ( student of students){
		let studentGrades  = grades[student];
		let currentAverage  =getAverage(studentGrades);
		if (currentAverage > maximumAverage){
			maximumAverage  = currentAverage;
			bestStudent  = student;
		}
	}
	return bestStudent;
}

function getAverage(args){
	return args.reduce((a,b) => a+b) / args.length;
}