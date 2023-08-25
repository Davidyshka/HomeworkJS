class Person{
	constructor(name,age,gender) {
		this.name=name;
		this.age=age;
		this.gender=gender;
	}
	getDetails() {
		console.log(`${this.name} ${this.age} ${this.gender}`)
	} 
};


class Student extends Person {
	constructor(name,age,gender,major) {
		super(name,age,gender);
		this.major=major;
	}
	// Это немного другой вариант вывода))) Я не совсем понимаю что нужно делать.
	// majorLog() {
	// 	console.log(`${this.major}`);
	// };
	// getDetails() {
	// 	super.getDetails();
	// 	this.majorLog()
	// };
	getDetails() {
		console.log(`${this.name} ${this.age} ${this.gender} ${this.major}`)
	} 
};

let person=new Person('David',22,'Male');
let student1=new Student('Oleg',33,'Male','fullstack');
let student2=new Student('Mark',19,'Male','frontend');
let student3=new Student('Anton',25,'Male','backend');
let student4=new Student('Anya',33,'Female','fullstack');

person.getDetails()
student1.getDetails()
student2.getDetails()
student3.getDetails()
student4.getDetails()



