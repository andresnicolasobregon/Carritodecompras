const productos= [{id:0, nombre:"Sansung Galaxy",imagen:"celular1.png", precio:"$100"},
				{id:1, nombre:"Sansung A4",imagen:"celular2.png", precio:"$200"},
				{id:2, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300"},
				{id:3, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300"}]

function cargar() {
	let padre = document.getElementById("boxproductos")
	
	for (const producto of productos) {
		let parrafo= document.createElement("div")
		parrafo.innerHTML = `<div class="boxproducto">
							<img src=${producto.imagen} width="100">
							<h3>${producto.nombre}</h3>
							<p>${producto.precio}</p>
							<button onclick="detalle(${producto.id})">Ver</button>
						</div>`;
		padre.appendChild(parrafo);
	}
}

cargar()

function detalle(i) {
	localStorage.setItem('idproducto', i)
	window.open("detalle.html")
}


