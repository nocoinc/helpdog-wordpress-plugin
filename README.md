# hd-wordpress-plugin

## Environment Setup

1. Install php@8.1, node@20
2. Install wp-cli (https://wp-cli.org/)
3. Run `npm i`

## Local Development

1. Start the WordPress Docker container with the following command:

   ```console
   npm run start

2. Access http://localhost:18888/wp-admin/plugins.php.

The WP login credentials are admin/password.

Once logged in, the plugin under development will be installed.

## Testing with Multiple Versions

You need to consider both the WordPress version and the PHP version.

WordPress release versions
The PHP version depends on the WordPress version.

Additionally, the version of npm packages like React used in the plugin also depends on the WordPress version.

Therefore, consider the following sequence:

1. Decide the minimum WordPress version you want to support (usually, it supports 2-3 minor versions back from the latest).
  - Example: 6.5
1. Check the latest WordPress version.
  - Example: 6.6.1
1. Update npm packages using the "minimum WordPress version".
  - Run npm run packages-update
  - Adjust the scripts.packages-update in package.json for more details.
1. Test the plugin with both the "minimum WordPress version" and the "latest WordPress version".
  - Modify .wp-env's core, and run npm run start:update.
1. Update the version references in readme.txt and helpdog.php.
  - Requires at least, Tested up to, Requires PHP
1. Update the plugin version itself.
  - Modify the Stable tag in readme.txt and helpdog.php.
  - Update the version reference in package.json.
1. After merging the PR, add a tag.


