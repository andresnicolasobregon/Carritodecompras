 const productos= [{id:0, nombre:"Sansung Galaxy",imagen:"celular1.png", precio:"$100", detalle: "pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
				{id:1, nombre:"Sansung A4",imagen:"celular2.png", precio:"$200", detalle: "pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
				{id:2, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300", detalle: "pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
				{id:3, nombre:"Sansung A5",imagen:"celular3.png", precio:"$300", detalle: "pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."}]

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