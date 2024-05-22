const productos= [{id:0, nombre:"Sansung Galaxy",imagen:"celular1.png", precio:"$100", detalle:"Pantalla: Pantalla PLS TFT de 5.0 pulgadas con resolución de 800 x 480 píxeles. Procesador: Procesador Exynos 7870 de ocho núcleos a 1.6 GHz.Memoria RAM: 1 GB. Almacenamiento interno: 16 GB.Cámara trasera: Cámara principal de 5 megapíxeles. Cámara frontal: Cámara frontal de 5 megapíxeles. Batería: Batería de 2600 mAh. Sistema operativo: Android 8.0 Oreo (Go Edition) con actualización a Android 8.1.0."},
				{id:1, nombre:"Sansung A4",imagen:"celular2.png", precio:"$200"},
				{id:2, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300"},
				{id:3, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300"}]


function cargar() {
	let i = localStorage.getItem('idproducto')
	let padre = document.getElementById("boxproductos")
	let parrafo= document.createElement("div")
		parrafo.innerHTML = `<div class="boxproducto">
							<img src=${productos[i].imagen} width="100">
							<h3>${productos[i].nombre}</h3>
							<p>${productos[i].precio}</p>
							<p>${productos[i].detalle}</p>
							<div class="boxcontador">
								<button onclick="sumar()">+</button>
								<p id="cantidad">0</p>
								<button onclick="restar()">-</button>
							</div>
							<button>Agregar al carrito</button>
						</div>`;
		padre.appendChild(parrafo);
}

cargar()


let cantproductos=0;

function sumar() {
	cantproductos = cantproductos + 1;
	document.getElementById('cantidad').innerHTML= cantproductos;
}
function restar() {
	if (cantproductos>0) {
		cantproductos = cantproductos - 1;
	document.getElementById('cantidad').innerHTML= cantproductos;
	}
	
}