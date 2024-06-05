const productos= [{id:0, nombre:"Sansung Galaxy",imagen:"celular1.png", precio:"100", detalle: "pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
{id:1, nombre:"Sansung A4",imagen:"celular2.png", precio:"200", detalle: "Pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
{id:2, nombre:"Sansung A5",imagen:"celular3.png", precio:"300", detalle: "Pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."},
{id:3, nombre:"Sansung A5",imagen:"celular3.png", precio:"300", detalle: "Pantalla Super AMOLED de 6.4 pulgadas y una tasa de refresco de 90 Hz. Funciona con un procesador MediaTek Helio G80, tiene variantes de 4 GB o 6 GB de RAM y opciones de almacenamiento de 64 GB o 128 GB, expandible hasta 1 TB con microSD. Su cámara trasera cuádruple incluye un sensor principal de 48 MP con OIS, y su cámara frontal es de 13 MP. La batería de 5000 mAh soporta carga rápida de 15W. Ejecuta One UI Core 3.1 basado en Android 11, tiene un lector de huellas lateral y soporte para desbloqueo facial. Incluye conectividad 4G LTE, Wi-Fi, Bluetooth 5.0, USB-C y un conector de auriculares de 3.5 mm."}]


function mostrarcantidad() {
    let i = localStorage.getItem('cantproducto')
    document.getElementById("cantidadcarrito").innerHTML= i;
	document.getElementById("cantidadcarrito").style.visibility = "visible";
    let producto = localStorage.getItem('idproducto');
    let totalpagar = i*productos[producto].precio
    let padre = document.getElementById("tablacarrito")
	let parrafo= document.createElement("tr")
	parrafo.innerHTML = ` <td><img src=${productos[producto].imagen} width="100"></td>
                                <td>${productos[producto].nombre}</td>
                                <td>${i}</td>
                                <td>$ ${totalpagar}</td>
                                <td><button><span class="material-symbols-outlined">
                                delete</span></button></td>`;
    padre.appendChild(parrafo);
}

mostrarcantidad()