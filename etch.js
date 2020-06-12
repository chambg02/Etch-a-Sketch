var userSize; //to use a variable across functions, define it first outside function.
var blockSize;
var convertedSize;

function size() {
	userSize = prompt("Enter number of columns to make a square");
	convertedSize = +userSize + +1;
	//call variable without "let or var"
}

size();

function createBlock() {
	blockSize = 960/convertedSize;
	const block = document.createElement('div');
	block.style.width = blockSize + "px"; //set size using variable blockSize
	block.style.height = blockSize + "px"; //set size using variable blockSize
	block.style.cssFloat = "left"; //makes each new div in a horizontal line

	block.onmouseover= () => block.style.background="black"; //colour the blocks on hover

container.appendChild(block); 
}

for (i=0;i<userSize*userSize;i++) {
createBlock();
}


