function mostrarMenu() {
  var menu = document.getElementById("menu");

  // con toogle agregamos o quitamos la clase "mostrar"
  menu.classList.toggle("listaVerticalActiva");
}

document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    // Validar que se haya seleccionado un archivo
    if (imageInput.files.length === 0) {
      alert("Por favor selecciona una imagen.");
      return;
    }

    // Obtener el archivo y generar una URL para previsualización
    const file = imageInput.files[0];
    const imageURL = URL.createObjectURL(file);

    // Crear un contenedor para el nuevo blog
    const blogContainer = document.createElement("div");
    blogContainer.className = "blog";

    // Crear la imagen
    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = title;

    // Crear el título
    const blogTitle = document.createElement("h2");
    blogTitle.textContent = title;

    // Crear la descripción
    const blogDescription = document.createElement("p");
    blogDescription.textContent = description;

    // Agregar elementos al contenedor del blog
    blogContainer.appendChild(img);
    blogContainer.appendChild(blogTitle);
    blogContainer.appendChild(blogDescription);

    // Agregar el contenedor al área de blogs
    document.getElementById("blogsContainer").appendChild(blogContainer);

    // Limpiar el formulario
    document.getElementById("blogForm").reset();
  });
