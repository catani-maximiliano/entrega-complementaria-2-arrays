//variables
let ingresar = document.getElementById("ingresar");
let mostrarPlatos = document.getElementById("mostrar");
let ordenarPrecio = document.getElementById("ordenarPrecio");
let ordenarProducto = document.getElementById("ordenarProducto");
const resetear = document.querySelector("#resetear");

let nuevoPlato = [];

const elemento = document.querySelector("#tabla");
let tablaContentPrecio= ``;
let tablaContentProducto= ``;
let ordenadosPrecio=[];

let listaPlatos = document.getElementById("tabla");
let tablaContent = ``;
let ordenadosProducto=[];

class comidas {
  constructor(nombre, ingredientes, lugar, precio) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.lugar = lugar;
    this.precio = precio;
  }
}

//funcionalidad de los botones
ingresar.onclick = function (e) {
  ingreso();
};
mostrarPlatos.onclick = function (e) {
  mostrarPlato();
};
ordenarPrecio.onclick = function (e) {
  ordenPrecio();
};
ordenarProducto.onclick = function (e) {
  ordenProducto();
};
resetear.addEventListener("click", () => {
  reset();

}
);

//funciones
function ingreso() {
  let nombre = prompt("ingrese el nombre del plato comida");
  let ingredientes = prompt("ingrese los ingredientes del plato de comida");
  let lugar = prompt("ingrese el nombre del lugar de donde es tipica esta comida");
  let precio = parseInt(prompt("ingrese el precio del plato"));
 
  nuevoPlato.push(new comidas(nombre, ingredientes, lugar, precio));
  alert("ingresado Correctamente");
}



function mostrarPlato() {
  reset();

  for (let item of nuevoPlato) {
    tablaContent += `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.ingredientes}</td>
        <td>${item.lugar}</td>
        <td>${item.precio}</td>
      </td>
    `;
  }
  listaPlatos.innerHTML += tablaContent;
}

function ordenPrecio() {
  reset();

  ordenadosPrecio= nuevoPlato.map(elemento =>elemento);

  ordenadosPrecio.sort(function(a,b){
    return a.precio-b.precio;
  })


  for (let item1 of ordenadosPrecio ) {
    tablaContentPrecio += `
      <tr>
        <td>${item1.nombre}</td>
        <td>${item1.ingredientes}</td>
        <td>${item1.lugar}</td>
        <td>${item1.precio}</td>
      </td>
    `;
  }
  listaPlatos.innerHTML += tablaContentPrecio;
}







function ordenProducto() {
  reset();
  ordenadosProducto= nuevoPlato.map(elemento =>elemento);
 
  ordenadosProducto.sort(function(a,b){
    if (a.nombre > b.nombre) {
      return 1;
      }
      if (a.nombre < b.nombre) {
      return -1;
      }
      return 0;
  })


  for (let item1 of ordenadosProducto ) {
    tablaContentProducto += `
      <tr>
        <td>${item1.nombre}</td>
        <td>${item1.ingredientes}</td>
        <td>${item1.lugar}</td>
        <td>${item1.precio}</td>
      </td>
    `;
  }
  listaPlatos.innerHTML += tablaContentProducto;
}

function reset() {
  elemento.innerHTML = `<table id="tabla" class="w-75 m-5 table table-bordered table-striped table-dark">
  <tr>
      <th>Plato</th>
      <th>ingredientes</th>
      <th>lugar tipico</th>
      <th>Precio</th>
  </tr>
</table>`;   

tablaContent = ``;
tablaContentPrecio =``;
tablaContentProducto =``;
}








