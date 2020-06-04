function createBlock() {
	const block = document.createElement('div');
	block.style.border = "1px solid";
	block.style.width = "50px";
	block.style.height = "50px";
	block.style.cssFloat = "left"; //makes each new div in a horizontal line

	block.onmouseover= () => block.style.background="yellow"; //colour the blocks on hover

container.appendChild(block); 
}

for (i=0;i<17;i++) {
createBlock();

}
