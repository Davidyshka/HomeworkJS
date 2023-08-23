const item={
	id: '8',
	name: 'Notebook',
	firm: 'LG',
	quantity: 4,
	price: 6000,
	totalAmount: 24000,
};

for (let key in item) {
	console.log(`Ключ: ${key}, Значение: ${item[key]}`);
}

let developer={
	firstName: 'Maria',
	lastName: 'Y.',
	country: 'Cyprus',
	continent: 'Europe',
	age: 30,
	language: 'Javascript'
}

let developer2={
	firstName: 'Victoria',
	lastName: 'T.',
	country: 'Puerto Rico',
	continent: 'Americas',
	age: 23,
	language: 'Python'
}

function getLocation() {
	console.log(`Страна: ${this.country} Континент: ${this.continent}`);
};

developer.f=getLocation; 
developer2.f=getLocation;

developer.f()
developer2.f()

let fruits=['Груша','Яблоко','Апельсин','Банан']
console.log(`${fruits[1]} ${fruits[3]}`);

let arr=[1,4,10,7,3];

function calcSumArr(arr) {
	let sum=0;
	arr.forEach(function (item) {
		sum += item
	})
	return sum;
};

console.log(calcSumArr(arr));

let array=['a','b'];

// function addItem(arr,item) {
// 	arr.length++
// 	arr[2]=item
// }


const addItem=(arr,item) => {
	arr.length++
	arr[2]=item
}

addItem(array,'c')
console.log(array)