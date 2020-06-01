
function createRow() {
	for (a=0;a<17;a++) {
	const row = document.createElement('div');
	row.style.border = "1px solid";
	row.style.width = "50px";
	row.style.height = "50px";
	row.style.cssFloat = "left";

	row.onclick= () => row.style.background="yellow";

container.appendChild(row);
}
}

function lineBreak() {
	const lb = document.createElement("br");
	row.appendChild(lb);
}

for (i=0;i<17;i++) {
createRow();
;
}






//container.querySelector('#box1');
//box1.addEventListener('hover', () => {
//	box1.style.background = "yellow";
//});


