<?php
/**
 * Namespaced functions.
 */

declare( strict_types=1 );

namespace Required\PluginName;

use function Required\Traduttore_Registry\add_project;

/**
 * Inits plugin.
 */
function bootstrap(): void {
	add_action( 'init', __NAMESPACE__ . '\register_translations_project' );

	Blocks\bootstrap();
}

/**
 * Registers Traduttore project for translations.
 */
function register_translations_project(): void {
	add_project(
		'plugin',
		'plugin-name',
		'https://translate.required.com/api/translations/plugin-name/'
	);
}
