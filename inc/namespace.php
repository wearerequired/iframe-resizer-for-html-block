<?php
/**
 * Namespaced functions.
 */

declare( strict_types=1 );

namespace Required\IframeResizerForHtmlBlock;

use WP_HTML_Tag_Processor;

/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_assets' );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );
	add_filter( 'register_block_type_args', __NAMESPACE__ . '\extend_html_block_attributes', 10, 2 );
	add_filter( 'render_block_core/html', __NAMESPACE__ . '\enqueue_iframe_resizer', 10, 2 );
}

/**
 * Registers public assets.
 */
function register_assets(): void {
	$script_asset = require PLUGIN_DIR . '/assets/dist/iframe-resizer-parent.asset.php';
	wp_register_script(
		'iframe-resizer-for-html-block-parent',
		plugins_url( 'assets/dist/iframe-resizer-parent.js', PLUGIN_FILE ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	$script_asset = require PLUGIN_DIR . '/assets/dist/iframe-resizer-child.asset.php';
	wp_register_script(
		'iframe-resizer-for-html-block-child',
		plugins_url( 'assets/dist/iframe-resizer-child.js', PLUGIN_FILE ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}

/**
 * Enqueues scripts and styles for the editor.
 */
function enqueue_editor_assets(): void {
	$script_asset = require PLUGIN_DIR . '/assets/dist/editor.asset.php';
	wp_enqueue_script(
		'iframe-resizer-for-html-block-editor',
		plugins_url( 'assets/dist/editor.js', PLUGIN_FILE ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_set_script_translations( 'iframe-resizer-for-html-block-editor', 'iframe-resizer-for-html-block' );

	$resizer_child_script = wp_scripts()->query( 'iframe-resizer-for-html-block-child' );
	wp_add_inline_script(
		'iframe-resizer-for-html-block-editor',
		'window.iframeResizerChildScriptSrc = "' . esc_url_raw( add_query_arg( 'ver', $resizer_child_script->ver, $resizer_child_script->src ) ) . '";',
		'before'
	);

	if ( file_exists( PLUGIN_DIR . '/assets/dist/index.css' ) ) {
		wp_enqueue_style(
			'iframe-resizer-for-html-block-editor',
			plugins_url( 'assets/dist/editor.css', PLUGIN_FILE ),
			[],
			filemtime( PLUGIN_DIR . '/assets/dist/index.css' )
		);
	}
}

/**
 * Extends the HTML block attributes.
 *
 * @param array<string,mixed> $args       Array of arguments for registering a block type.
 * @param string              $block_type Block type name including namespace.
 * @return array<string,mixed> Array of arguments for registering a block type.
 */
function extend_html_block_attributes( array $args, string $block_type ): array {
	if ( 'core/html' === $block_type ) {
		$args['attributes']['isIframeResizerEnabled'] = [
			'type'    => 'boolean',
			'default' => false,
		];
	}

	return $args;
}

/**
 * Enqueues the iframe resizer script if the block has an iframe and the iframe resizer is enabled.
 *
 * @param string              $block_content The block content.
 * @param array<string,mixed> $block         The full block, including name and attributes.
 * @return string The updated block content.
 */
function enqueue_iframe_resizer( string $block_content, array $block ): string {
	$iframe_resizer_enabled = $block['attrs']['isIframeResizerEnabled'];
	if ( ! $iframe_resizer_enabled ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );

	$has_iframe = false;
	while ( $processor->next_tag( 'iframe' ) ) {
		$processor->add_class( 'iframe-resizer' );
		$has_iframe = true;
	}

	if ( $has_iframe ) {
		wp_enqueue_script( 'iframe-resizer-for-html-block-parent' );

		wp_style_engine_get_stylesheet_from_css_rules(
			[
				[
					'selector'     => '.iframe-resizer',
					'declarations' => [
						'width'  => '100%',
						'height' => '100vh',
						'border' => '0',
					],
				],
			],
			[
				'context' => 'global-styles',
			]
		);
	}

	return $processor->get_updated_html();
}
