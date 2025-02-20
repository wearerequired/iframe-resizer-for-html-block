( function () {
	window.addEventListener( 'load', () => {
		document.querySelectorAll( '.wp-block-plugin-name-example' ).forEach( ( el ) => {
			el.classList.add( 'wp-block-plugin-name-example--active' );
		} );
	} );
} )();
