//1

let linkNew = document.createElement('div')
linkNew.classList.add('link')
let img = document.createElement('img')
img.src = "https://tse2.mm.bing.net/th?id=OIP.KywSLc5iz2vpYu71sbpkkwHaHa&pid=Api&P=0&h=220";
img.alt = "კავარადონა"
let newH2 = document.createElement('h2')
newH2.textContent= 'title'
newH2.classList.add('title1')
newH2.style.backgroundColor = "red"
newH2.style.fontSize = '30px'
document.getElementById('wraper').appendChild(newH2);
document.body.appendChild(img)
document.getElementById('wraper').appendChild(linkNew);
//2
document.querySelectorAll('.newdiv').forEach((item) =>{
    let link1 = document.createElement('p')
    link1.textContent = 'hello';
    item.appendChild(link1)
}
)
//3
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});