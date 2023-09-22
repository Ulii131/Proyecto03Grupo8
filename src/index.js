let formularioProducto = document.getElementById("formulario_producto");
let nombreProducto = document.getElementById("nombre");
let precioProducto = document.getElementById("precio");
let comercioProducto = document.getElementById("comercio");
let productos = document.getElementById("listaProductos");
let botonOrdenar = document.getElementById("ordenarProductos");
let botonOrdenarPrecio = document.getElementById("ordenarPrecio")

let listaProductos = [];

formularioProducto.addEventListener("submit", crearProducto);

function crearProducto(e) {
  e.preventDefault();
  let producto = { nombre: "", precio: 0.0, comercio: "" };
  let nombre = nombreProducto.value;
  let precio = parseFloat(precioProducto.value);
  let comercio = comercioProducto.value;
  producto.nombre = nombre;
  producto.precio = precio;
  producto.comercio = comercio;
  formularioProducto.reset();
  productos.innerHTML += `<li>${producto.nombre} - ${producto.comercio} - $${producto.precio}</li>`;
  listaProductos.push(producto);
}

botonOrdenar.addEventListener("click", ordenarProductos);

function ordenarProductos() {
  // Copiamos la lista de productos a un nuevo array para no modificar el original
  let nuevoArray = listaProductos.slice();

  // Ordenamos el nuevo array alfabéticamente por nombre
  nuevoArray.sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();

    if (nombreA < nombreB) return -1;
    if (nombreA > nombreB) return 1;
    return 0;
  });

  // Limpiamos la lista de productos en el HTML
  productos.innerHTML = "";

  // Renderizamos la lista ordenada
  nuevoArray.forEach((producto) => {
    productos.innerHTML += `<li>${producto.nombre} - ${producto.comercio} - $${producto.precio}</li>`;
  });
}

botonOrdenarPrecio.addEventListener('click', ordenarProductosPrecio);


function ordenarProductosPrecio() {
  // Copiamos la lista de productos a un nuevo array para no modificar el original
  let nuevoArray = listaProductos.slice();

  // Ordenamos el nuevo array por precio (de menor a mayor)
  nuevoArray.sort((a, b) => a.precio - b.precio);

  // Limpiamos la lista de productos en el HTML
  productos.innerHTML = "";

  // Renderizamos la lista ordenada
  nuevoArray.forEach((producto) => {
    productos.innerHTML += `<li>${producto.nombre} - ${producto.comercio} - $${producto.precio}</li>`;
  });
}