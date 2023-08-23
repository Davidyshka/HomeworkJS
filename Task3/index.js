
	const firstName=prompt('Ваше имя ?','');
	const lastName=prompt('Ваша фамилия ?','');
	const experience=parseInt(prompt('Ваш опыт работы в годах ?',''));
	const english=confirm('Вы свободно говорите на английском ?');
	const projectLvl=confirm('Ваши проекты были сложные ?');
	const algorithms=confirm('Вы знайте алгоритмы ?');
  const teamLead=confirm('Тебе нравится управлять командой ?');
  const chance= english && algorithms && projectLvl ? 'Шансы есть' : english&&algorithms ?'Шансов мало' : 'Шансов мало';


let gradation
let salary
if (experience <=75 && !english) {
	gradation='junior'
	salary='до 1500$'
}else if (experience <=5 && english) {
	gradation='middle'
	salary='от 1500$ до 2700$'
}else if (experience >=6 && experience <=9 && english && projectLvl) {
	gradation='senior'
	salary='от 3000$'
}else if (experience >=10 && english && projectLvl && teamLead) { 
	gradation='principial'
	salary='от 7000$'
}else {
	gradation='Вы нам не подходите'
	salary= '0$'
};

alert(
	`Ваше имя: ${firstName}\nВаша фамилия: ${lastName}\nВаш опыт в годах: ${experience}\nГрадация: ${gradation}\nПримерная зарплата: ${salary} \nШанс попасть на работу в корпорацию: ${chance}`
);


