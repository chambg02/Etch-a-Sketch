
for (i=0;i<17;i++) {
const box = document.createElement('div');
box.style.border = "1px solid";
box.style.width = "50px";
box.style.height = "50px";

box.onclick= () => box.style.background="yellow";

//container.querySelector('#box1');
//box1.addEventListener('hover', () => {
//	box1.style.background = "yellow";
//});

container.appendChild(box);
}
