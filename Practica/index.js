let usersForm=document.querySelector('.users-form')
let isTable=document.querySelector('.table-body');

const getUser=() => {
	let { name,surname,age }=usersForm
	const isUser={
		name: name.value,
		surname: surname.value,
		age: age.value
	}
	return  isUser
}

const createTable=(userData,userTable) => {
	userData.forEach((elem,index) => {
		userTable.innerHTML +=
			`<tbody>
		<td>${index+1}</td>
    <td>${elem.name}</td>
    <td>${elem.surname}</td>
    <td>${elem.age}</td>
		</tbody>
		`
	});
};

const init=() => {
	let isValue=[]
	usersForm.addEventListener('submit',(event) => {
		event.preventDefault();
		
		const user=getUser();
		isValue.push(user);
		createTable(isValue,isTable);
		console.log(isValue);
	});

};

init()