let usersForm = document.querySelector('.users-form')
let isTable = document.querySelector('.table-body')
let deleteBtn = document.getElementById('deleteButton')

const getUser = () => {
	const { name, surname, age } = usersForm
	const isUser = {
		name: name.value,
		surname: surname.value,
		age: age.value,
	}
	return isUser
}

const createTable = (userData, userTable) => {
	userTable.innerHTML = ``
	userData.forEach((elem, index) => {
		userTable.innerHTML += `<tbody>
		<td>${index + 1}</td>
    <td>${elem.name}</td>
    <td>${elem.surname}</td>
    <td>${elem.age}</td>
		</tbody>
		`
	})
}
const validationForm = () => {
	const { name, surname, age } = usersForm
	const inputError = usersForm.querySelectorAll('div')
	inputError[0].textContent = ''
	inputError[1].textContent = ''
	inputError[2].textContent = ''

	let valid = true
	switch (true) {
		case name.value.trim() === '':
			inputError[0].textContent = '*Invalid input data'
			valid = false
		case surname.value.trim() === '':
			inputError[1].textContent = '*Invalid input data'
			valid = false
		case age.value.trim() === '':
			inputError[2].textContent = '*Invalid input data'
			valid = false
	}
	return valid
}

const init = () => {
	let isValue = []
	usersForm.addEventListener('submit', event => {
		event.preventDefault()

		const user = getUser()
		const isValid = validationForm()

		if (isValid) {
			isValue.push(user)
			createTable(isValue, isTable)
		}
	})

	deleteBtn.addEventListener('click', () => {
		isValue = []
		createTable(isValue, isTable)
		const { name, surname, age } = usersForm
		name.value = ''
		surname.value = ''
		age.value = ''
	})
}

init()
