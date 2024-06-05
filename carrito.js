function mostrarcantidad() {
    let i = localStorage.getItem('cantproducto')
    document.getElementById("cantidadcarrito").innerHTML= i;
	document.getElementById("cantidadcarrito").style.visibility = "visible";
}

mostrarcantidad()