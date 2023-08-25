class Employee {
	constructor(options) {
		this.name=options.name
		this.salary=options.salary
	}
	getDetails() {
		console.log(`Имя: ${this.name} Зарплата: ${this.salary}`)
	}
}

class Manager extends Employee{
	constructor(options) {
		super(options)
		this.departament=options.departament
	}

	getDetails() {
		console.log(`Имя: ${this.name} Зарплата: ${this.salary} Департамент: ${this.departament}`)
	}
}

class Developer extends Manager {
	constructor(options) {
		super(options)
		this.machineLanguage = options.machineLanguage
	}
		getDetails() {
		console.log(`Имя: ${this.name} Зарплата: ${this.salary} Язык программирования: ${this.machineLanguage}`)
	}
}

let employee1=new Employee({
	name: 'David',
	salary: '2500$',
}) 

let manager1=new Manager({
	name: 'Liza',
	salary: '1000000$',
	departament: 'Teach Me Skills',
})

let developer1=new Developer({
	name: 'Oleg',
	salary: '2000$',
	machineLanguage: 'JavaScript',
})

employee1.getDetails()
manager1.getDetails()
developer1.getDetails()
