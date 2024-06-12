function mostrarcantidad() {
    let i = localStorage.getItem('cantproducto')
    document.getElementById("cantidadcarrito").innerHTML= i;
	document.getElementById("cantidadcarrito").style.visibility = "visible";
    let producto = localStorage.getItem('idproducto');
    let totalpagar = i*productos[producto].precio
    let padre = document.getElementById("tablacarrito")
	let parrafo= document.createElement("tbody")
	parrafo.innerHTML = ` <tr id="fila1">
                                <td><img src=${productos[producto].imagen} width="100"></td>
                                <td>${productos[producto].nombre}</td>
                                <td>${i}</td>
                                <td>$ ${totalpagar}</td>
                                <td><button onclick="eliminar()"><span class="material-symbols-outlined">
                                delete</span></button></td>
                            </tr>`;
    padre.appendChild(parrafo);
}

mostrarcantidad()

function eliminar() {
    alert("¿Está seguro que quiere eliminar el producto?")
    let parrafo   = document.getElementById("fila1");
    parrafo.parentNode.removeChild(parrafo);
}