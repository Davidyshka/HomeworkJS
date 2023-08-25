class Shape {
	constructor(options) {
		this.name=options.name
	}

	getArea() {
		console.log('Метод getArea() должен быть реализован в подклассах')
		return this.name = 0
	}
}

class Circle extends Shape {
	constructor(options) {
		super(options)
		this.radius=options.radius
	}
	getArea() {
		return this.radius=3.14*this.radius**2
	}
}

class Rectangle extends Shape{
	constructor(options) {
		super(options)
		this.whidth=options.whidth
		this.height=options.height
		this.area=options.area
	}

	getArea() {
		return this.area = this.whidth * this.height
	}
}

let shape1=new Shape({
	name: 'Shape'
})

let circle1=new Circle({
	name: 'Circle',
	radius: 3,
})

let rectangle1=new Rectangle({
	name: 'Rectangle',
	whidth: 13,
	height: 32,
})

shape1.getArea()
console.log(shape1)

circle1.getArea()
console.log(circle1)

rectangle1.getArea()
console.log(rectangle1)




