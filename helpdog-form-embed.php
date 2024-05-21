<?php
/**
 * Plugin Name:       Helpdog Form Embed
 * Plugin URI:        https://helpdog.ai/
 * Description:       A plugin to embed forms created with Helpdog Form into WordPress.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            noco, Inc.
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       helpdog-form-embed
 *
 * @package Helpdog
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function helpdog_helpdog_form_embed_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'helpdog_helpdog_form_embed_block_init' );
