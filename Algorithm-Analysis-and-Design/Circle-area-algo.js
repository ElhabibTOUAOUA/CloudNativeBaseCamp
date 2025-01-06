// Function to calculate the area of a circle
function calculateCircleArea(radius) {
	if (radius <= 0) {
		return "Radius must be greater than zero";
	}
	const pi = Math.PI;
	let area = pi * radius * radius;
	return area;
}

// Example usage
const radius = 5;
let area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}`);
