// circle.js
const PI = 3.14159;

function calculateArea(radius) {
  if (radius < 0) {
    throw new Error("El radio no puede ser negativo");
  }
  return PI * radius * radius;
}

export default calculateArea;
