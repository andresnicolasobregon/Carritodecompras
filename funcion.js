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


