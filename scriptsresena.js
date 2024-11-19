document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que se recargue la página

    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;

    // Crear un contenedor para la reseña
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review";

    // Agregar el nombre
    const reviewName = document.createElement("h3");
    reviewName.textContent = name;

    // Agregar el comentario
    const reviewComment = document.createElement("p");
    reviewComment.textContent = comment;

    // Agregar la calificación
    const reviewRating = document.createElement("p");
    reviewRating.className = "rating";
    reviewRating.textContent = `Calificación: ${rating} ${
      rating === "1" ? "Estrella" : "Estrellas"
    }`;

    //agrego fecha
    const reviewDate = document.createElement("p");
    reviewDate.textContent = new Date().toLocaleDateString();

    // Añadir los elementos al contenedor de la reseña
    reviewContainer.appendChild(reviewName);
    reviewContainer.appendChild(reviewComment);
    reviewContainer.appendChild(reviewRating);
    reviewContainer.appendChild(reviewDate);

    // Agregar la reseña al contenedor principal
    document.getElementById("reviewsContainer").appendChild(reviewContainer);

    // Limpiar el formulario después de agregar la reseña
    document.getElementById("reviewForm").reset();
  });

function mostrarMenu() {
  var menu = document.getElementById("menu");

  // con toogle agregamos o quitamos la clase "mostrar"
  menu.classList.toggle("listaVerticalActiva");
}
