const productos = JSON.parse(localStorage.getItem("carrito"));

const modelar = function (productos, orden) {
  const datacontainer = document.getElementById("contenedor-carrito");
  datacontainer.innerHTML = "";
  if (productos === null) {
    const empty = document.createElement("p");
    empty.classList.add("carrito-vacio");
    empty.textContent = "Tu carrito esta vacio.";
    datacontainer.appendChild(empty);
  } else {
    productos.forEach((element) => {
      const producto = document.createElement("div");
      producto.classList.add("carrito-producto");

      const imagenElement = document.createElement("img");
      imagenElement.src = `${element.imagen}`;
      producto.appendChild(imagenElement);

      const details = document.createElement("div");
      details.classList.add("carrito-producto-titulo");
      const small1 = document.createElement("small");
      small1.textContent = "titulo";
      details.appendChild(small1);

      const title = document.createElement("h3");
      title.textContent = element.titulo;
      details.appendChild(title);
      producto.appendChild(details);

      const quantity = document.createElement("div");
      quantity.classList.add("carrito-producto-cantidad");

      const small = document.createElement("small");
      small.textContent = "cantidad";

      quantity.appendChild(small);
      const quantityORIGI = document.createElement("p");
      quantityORIGI.textContent = element?.quantity || 1;
      quantity.appendChild(quantityORIGI);
      producto.appendChild(quantity);

      const price = document.createElement("div");
      quantity.classList.add("carrito-producto-precio");
      const small2 = document.createElement("small");
      small2.textContent = "precio";
      price.appendChild(small2);

      const priceOrigi = document.createElement("P");

      priceOrigi.textContent = element.precio;
      price.appendChild(priceOrigi);
      producto.appendChild(details);

      const subtotal = document.createElement("div");
      subtotal.classList.add("producto-precio-subtotal");
      const small3 = document.createElement("small");
      small3.textContent = "Subtotal";
      subtotal.appendChild(small3);

      const subtotalP = document.createElement("P");
      subtotalP.textContent = Number(element.precio) * element?.quantity || 1;
      subtotal.appendChild(subtotalP);
      producto.appendChild(subtotal);
      datacontainer.appendChild(producto);
    });
  }
};

modelar(productos);
