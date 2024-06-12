function cargar() {
	let i = localStorage.getItem('idproducto')
	let padre = document.getElementById("boxdetalle")
	let parrafo= document.createElement("div")
		parrafo.innerHTML = `<div class="boxdetalle">
								<div>
									<img src=${productos[i].imagen} width="100">
									<h3>${productos[i].nombre}</h3>
									<p>${productos[i].precio}</p>
								</div>
								<div>
									<p>${productos[i].detalle}</p>
									<div class="boxcontador">
										<button onclick="sumar()">+</button>
										<p id="cantidad">0</p>
										<button onclick="restar()">-</button>
									</div>
									<button onclick="agregaralcarrito()">Agregar al carrito</button>
								</div>
						</div>`;
		padre.appendChild(parrafo);
}

cargar()

function agregaralcarrito() {
	let producto = document.getElementById("cantidad").innerHTML;
	if (producto == 0) {
		alert("Ingrese el número de productos")
	}else{
		document.getElementById("cantidadcarrito").innerHTML= producto;
		document.getElementById("cantidadcarrito").style.visibility = "visible";
		localStorage.setItem('cantproducto', producto)
		window.open("carrito.html")
	}
}



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