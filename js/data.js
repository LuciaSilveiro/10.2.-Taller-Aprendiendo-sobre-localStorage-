// Selecciona el elemento del DOM donde se mostrará el dato
const dataSpan = document.getElementById("data");

console.log("data.js cargado");

// Recupera el dato almacenado en localStorage
const storedData = localStorage.getItem("storedData");
console.log("Dato recuperado de localStorage:", storedData);

// Verifica si hay datos y los muestra
if (storedData) {
  dataSpan.textContent = storedData; // Muestra el dato en el span
  console.log("Dato mostrado en la página");
} else {
  dataSpan.textContent = "No hay datos guardados."; // Mensaje si no hay datos
  console.log("No hay datos en localStorage");
}