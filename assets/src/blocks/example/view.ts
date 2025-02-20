( function () {
	window.addEventListener( 'load', () => {
		document
			.querySelectorAll( '.wp-block-iframe-resizer-for-html-block-example' )
			.forEach( ( el ) => {
				el.classList.add( 'wp-block-iframe-resizer-for-html-block-example--active' );
			} );
	} );
} )();
