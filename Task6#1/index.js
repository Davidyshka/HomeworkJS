let mainH1=document.getElementById('main-text')
let pText=document.getElementById('text')
let li=document.getElementById('listItem3')
let cLi=document.getElementsByTagName('list-item');

console.log(` ${mainH1} \n ${pText} \n ${li} \n ${cLi}`);


console.log(`${mainH1.outerText}`)
mainH1.innerHTML='Title level 1'
console.log(mainH1.innerHTML)

li.innerHTML = '<strong>List item 3</strong>'
