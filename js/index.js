// Selecciona los elementos del DOM
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

console.log("index.js cargado");

// Añade un evento al botón
buttonText.addEventListener("click", () => {
  console.log("Botón Guardar! clickeado");
  const value = inputText.value.trim(); // Obtiene el texto ingresado
  console.log("Valor ingresado:", value);
  if (value) {
    localStorage.setItem("storedData", value); // Guarda el dato en localStorage
    console.log("Dato guardado en localStorage");
    // alert("¡Dato guardado con éxito!"); // Puedes descomentar esto para verificar
    inputText.value = ""; // Limpia el input
    // Opcional: Mostrar un mensaje en la página
    const mensaje = document.createElement("p");
    mensaje.textContent = "¡Dato guardado con éxito!";
    mensaje.style.color = "green";
    document.body.appendChild(mensaje);
    setTimeout(() => {
      mensaje.remove();
    }, 3000); // Elimina el mensaje después de 3 segundos
  } else {
    // alert("Por favor, ingresa un dato válido."); // Puedes descomentar esto para verificar
    const mensaje = document.createElement("p");
    mensaje.textContent = "Por favor, ingresa un dato válido.";
    mensaje.style.color = "red";
    document.body.appendChild(mensaje);
    setTimeout(() => {
      mensaje.remove();
    }, 3000); // Elimina el mensaje después de 3 segundos
  }
});