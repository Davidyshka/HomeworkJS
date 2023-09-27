const usersForm=document.querySelector('.users-form')

usersForm.addEventListener('submit',(event) => {
	event.preventDefault()
	const { name,surname,age }=usersForm;
	const values={
		name: name.value,
		surname: surname.value,
		age: age.value
	};
	const isValues=[]
	isValues.push(values)

	const userTable=document.querySelector('.table-body');

	isValues.forEach((elem,index) => {
		userTable.innerHTML+=
		`<tbody>
		<td>#${index +1}</td>
    <td>${elem.name}</td>
    <td>${elem.surname}</td>
    <td>${elem.age}</td>
		</tbody>
		`
		
	});
		console.log(isValues)
	

});

