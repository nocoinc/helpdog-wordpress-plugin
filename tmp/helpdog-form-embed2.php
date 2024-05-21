<?php
/**
 * Plugin Name: Helpdog Form Embed
 * Description: A plugin to embed forms created with Helpdog Form into WordPress.
 * Version: 0.1.0
 * Author: noco, Inc.
 */

function helpdog_form_embed_plugin_register_block() {
    // Register the block editor script
    wp_register_script(
        'helpdog-form-embed-plugin-editor-script',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    // Register the block
    register_block_type( 'helpdog-form-embed-plugin/form-embed', array(
        'editor_script' => 'helpdog-form-embed-plugin-editor-script',
        'render_callback' => 'helpdog_form_embed_plugin_render_callback',
    ) );
}

add_action( 'init', 'helpdog_form_embed_plugin_register_block' );

function helpdog_form_embed_plugin_render_callback  ( $attributes ) {
    // Handle the rendering of the block
    if ( isset( $attributes['formUrl'] ) ) {
        return '<iframe src="' . esc_url( $attributes['formUrl'] ) . '" width="100%" height="500"></iframe>';
    }
    return '';
}
?>
