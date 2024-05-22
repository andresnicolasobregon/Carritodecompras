const productos= [{id:0, nombre:"Sansung Galaxy",imagen:"celular1.png", precio:"$100"},
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