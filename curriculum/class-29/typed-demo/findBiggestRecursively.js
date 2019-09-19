class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const ten = new Node(10);
const nine = new Node(9);
const eight = new Node(8);
const seven = new Node(7);
const six = new Node(6);
const five = new Node(5);
const four = new Node(4);
const three = new Node(3);

ten.left = nine;
ten.right = eight;
nine.left = seven;
nine.right = six;
eight.left = five;
eight.right = four;
seven.left = three;
root = ten;

const findBiggest = (root) => {
	if(root === null) {
		// Base Case
		return null;
	}

	if(root.left === null && root.right === null) {
		// Base Case
		return root.value;
	} else {
		const biggestInLeft = findBiggest(root.left);
		const biggestInRight = findBiggest(root.right);

		// vinicio - we want to find the biggest between 3 values
		//let biggestSoFar = Math.max(root.value, biggestInLeft);
		//biggestSoFar = Math.max(root.value, biggestInRight);
		return Math.max(root.value, biggestInLeft, biggestInRight);
	}
};

console.log(findBiggest(root));
