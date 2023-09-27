const usersForm=document.querySelector('.users-form')
const userTable=document.querySelector('.table-body');

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

	

	isValues.forEach((elem) => {
		userTable.innerHTML+=
		`<tbody>
		<td class="index"></td>
    <td>${elem.name}</td>
    <td>${elem.surname}</td>
    <td>${elem.age}</td>
		</tbody>
		`
	 const elements = document.querySelectorAll('.index');
   elements.forEach(function(item, i) {
       item.innerHTML = i+1;
   });
	});
});



