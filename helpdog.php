<?php
/**
 * Plugin Name:       Helpdog
 * Plugin URI:        https://helpdog.ai/
 * Description:       A plugin to embed forms created with Helpdog Form into WordPress.
 * Requires at least: 6.5
 * Tested up to:      6.6.1
 * Requires PHP:      8.1
 * Version:           0.1.6
 * Author:            noco, Inc.
 * Author URI:        https://nocoinc.co.jp/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       helpdog
 * Domain Path:       /languages
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
  register_block_type(__DIR__ . "/build");
  load_plugin_textdomain(
    "helpdog",
    false,
    dirname(__FILE__) . "/languages"
  );
}
add_action("init", "helpdog_block_init");

function helpdog_set_script_translations()
{
  $script_handle = generate_block_asset_handle("helpdog/form", "editorScript");
  wp_set_script_translations(
    $script_handle,
    "helpdog",
    dirname(__FILE__) . "/languages"
  );
}
add_action("init", "helpdog_set_script_translations");
