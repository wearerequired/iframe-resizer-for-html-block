<?php
/**
 * Blocks namespaced functions.
 */

declare( strict_types=1 );

namespace Required\IframeResizerForHtmlBlock\Blocks;

use const Required\IframeResizerForHtmlBlock\PLUGIN_DIR;
use const Required\IframeResizerForHtmlBlock\PLUGIN_FILE;

/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_assets' );
	add_action( 'init', __NAMESPACE__ . '\register_block_types' );
}

/**
 * Registers block types.
 */
function register_block_types(): void {
	register_block_type_from_metadata(
		PLUGIN_DIR . '/assets/dist/example-block.json'
	);
}

/**
 * Registers scripts and styles used by blocks.
 */
function register_assets(): void {
	$blocks_script_asset = require PLUGIN_DIR . '/assets/dist/blocks.asset.php';

	wp_register_script(
		'iframe-resizer-for-html-block-blocks-editor',
		plugins_url( 'assets/dist/blocks.js', PLUGIN_FILE ),
		$blocks_script_asset['dependencies'],
		$blocks_script_asset['version'],
		true
	);

	wp_set_script_translations( 'iframe-resizer-for-html-block-blocks-editor', 'iframe-resizer-for-html-block' );

	if ( file_exists( PLUGIN_DIR . '/assets/dist/blocks.css' ) ) {
		wp_register_style(
			'iframe-resizer-for-html-block-blocks-editor',
			plugins_url( 'assets/dist/blocks.css', PLUGIN_FILE ),
			[],
			filemtime( PLUGIN_DIR . '/assets/dist/blocks.css' )
		);
	}
}
