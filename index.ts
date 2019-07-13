interface Person {
	fname: string;
	lname: string;
}

class Developer {
	fullName: string;
	constructor(public fname: string, public lname: string, public mInit: string){
		this.fullName = `${fname} ${mInit} ${lname}`
	}
}


function greeting(person: Person) {
	return `hello ${person.fname} ${person.lname}`;
}

const user = new Developer('siemah', 'lsidem', 'M.');
console.log(greeting(user));
