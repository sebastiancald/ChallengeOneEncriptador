let btnEncriptar = document.querySelector( '.btn-encriptar' );

btnEncriptar.addEventListener( 'click', function(event) {

	event.preventDefault();

	filtrarTexto();

	if ( texto == '' ) {

		pizarraEvento( 'mostrarAlerta' );

	} else {

		texto = texto.split( '' );
		
		for (let i = 0; i < texto.length; i++ ) {

			if ( texto[i] == 'a') { texto[i] = 'ai' }
			else if ( texto[i] == 'e') { texto[i] = 'enter' }
			else if ( texto[i] == 'i') { texto[i] = 'imes' }
			else if ( texto[i] == 'o') { texto[i] = 'ober' }
			else if ( texto[i] == 'u') { texto[i] = 'ufat' }

		}

		texto = texto.join( '' );

		pizarraEvento('borrarContenido');
		pizarraEvento('cambiarTexto');
		pizarraEvento('mostrarBoton');

	}

} );