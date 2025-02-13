function populationGrowth(){
	let initialPopulation = prompt('Enter The Initial Population:');
	let rateOfGrowth  = prompt('Enter The Rate Of Growth:');
	let timeInHours = prompt('Enter The Time (in hours):');
	
	let finalPopulation = Math.round(parseFloat(initialPopulation) * (Math.pow(Math.E, (parseFloat(rateOfGrowth)) * 
	(parseFloat(timeInHours)))));
	
	
	let locationMonster = prompt('Where is the Location of the Monster?');
	let nameMonster = prompt('What is the name of the Monster?');
	
	document.getElementById('result').innerHTML = 'After ' + timeInHours + ' hours, ' + 'the population of ' + 
	nameMonster.concat(' in ',locationMonster).toUpperCase() + ' has risen to ' + finalPopulation;
	
}
