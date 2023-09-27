let mainH1=document.getElementById('main-text')
let pText=document.getElementById('text')
let li=document.getElementById('listItem3')
let cLi=document.getElementsByTagName('list-item');
let btn=document.getElementById('main-button')

console.log(` ${mainH1} \n ${pText} \n ${li} \n ${cLi}`);

//6.3

console.log(`${mainH1.outerText}`)
mainH1.innerHTML='Title level 1'
console.log(mainH1.innerHTML)
li.innerHTML='<strong>List item 3</strong>'

//6.4

btn.removeAttribute('role')
btn.setAttribute('target','_blank')
btn.setAttribute('rel','noopener')
btn.setAttribute('href','https://learn.javascript.ru')

//6.5

const imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'

let img1=document.createElement('img');

img1.setAttribute('src',imageUrl);
img1.setAttribute('style','width: 100px;');

let img2=img1.cloneNode(true);

mainH1.after(img1)
document.body.append(img2)

