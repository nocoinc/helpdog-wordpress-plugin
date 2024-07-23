<?php
/**
 * Plugin Name:       Helpdog
 * Plugin URI:        https://helpdog.ai/
 * Description:       A plugin to embed forms created with Helpdog Form into WordPress.
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            noco, Inc.
 * Author URI:        https://nocoinc.co.jp/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       helpdog
 *
 * @package Helpdog
 */

if (!defined("ABSPATH")) {
  exit(); // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function helpdog_block_init()
{
  // $script_handle = "helpdog-script";
  // $text_domain = "helpdog";

  // wp_register_script($script_handle, plugins_url("build/index.js", __FILE__), [
  // 	"wp-blocks",
  // 	// "wp-element",
  // 	"react",
  // 	"wp-i18n",
  // 	"wp-block-editor",
  // ]);

  register_block_type(__DIR__ . "/build");

  // register_block_type(__DIR__ . "/build", [
  // 	"editor_script_handles" => [$script_handle],
  // ]);

  // wp_set_script_translations($script_handle, $text_domain);
}
add_action("init", "helpdog_block_init");
