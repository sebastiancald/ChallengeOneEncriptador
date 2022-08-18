let btnCopiar = document.querySelector( '.btn-copiar' );

btnCopiar.addEventListener( 'click', function(event) {

	event.preventDefault();
	
	
	let copiarResultado = document.querySelector( '#resultado' ).textContent;

    navigator.clipboard.writeText(copiarResultado)
        .then(() => {
       
        alert("¡Texto copiado!")
    })
        .catch(err => {
        console.log('Ha ocurrido un error', err);
    })

	let actualizarBoton = document.querySelector( '.btn-copiar' ).value;
	actualizarBoton.value = '¡Texto copiado!';





} );