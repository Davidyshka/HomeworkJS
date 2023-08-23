
do {
	firstName=prompt('Ваше имя ?','')
	}
while (firstName.length===0 || firstName === ' ' || !isNaN(firstName));
do {
	lastName=prompt('Ваша фамилия ?','');
} while (lastName.length===0 || lastName === ' ' || !isNaN(lastName));
do {
	surName=prompt('Ваше отчество ?','');
}
while (surName.length===0 || surName=== ' ' || !isNaN(surName));
 
const fullName=`${lastName} ${firstName} ${surName}`;

// 
do {
	ageInYears=parseInt(prompt('Ваш возраст в годах ?',''));
}
while (ageInYears.length===0||ageInYears===' '|| isNaN(ageInYears));

// 
const ageInDays = ageInYears * 365;
const afterFiveYears = ageInYears + 5;
// 
const genderConfirm=confirm('Ваш пол мужской ?');
const gender = genderConfirm? 'мужской':'женский';
const pension = (gender === 'мужской' && ageInYears >= 55) || (gender === 'женский' && ageInYears >=55)? 'да':'нет';
// 
alert(
	`Ваше ФИО: ${fullName}\nВаш возраст в годах: ${ageInYears}\nВаш возраст в днях: ${ageInDays}\nЧерез 5 лет вам будет: ${afterFiveYears}\nВаш пол: ${gender}\nВы на пенсии: ${pension}`
);
