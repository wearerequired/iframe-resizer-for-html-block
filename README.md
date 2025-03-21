# iframe-resizer for HTML Block
Extends the HTML block with a setting to enable iframe resizing via [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer).

## Plugin Development

Run `composer i` to install plugin dependencies. (Normally only needed when not a dependency of a project.)

* `composer format`: Fixes automatic fixes PHP coding standard issues.
* `composer lint`: Checks PHP files for coding standard issues.
* `composer analyze`: Run static analysis.

## Block Development

There are several commands to assist you with local development of the plugin.

To install the needed packages, go into the plugin folder and run `npm install`.

After that, use `npm run <command>` to run a command. The following commands are available:

* `npm run build`: Runs all the JavaScript files in `assets/js/src` through webpack. The resulting JS files are saved in `assets/js/dist`.
* `npm run start`: Looks for any changes to the JS & CSS files and runs the build command if necessary. Ideal during development when you want to see your changes as quickly as possible in the browser.
* `npm run lint-js`: Checks JS files for coding standard issues.
* `npm run lint-js:fix`: Fixes automatic fixable JS coding standard issues.
* `npm run lint-css`: Checks JS files for coding standard issues.
* `npm run lint-css:fix`: Fixes automatic fixable CSS coding standard issues.

Browser support for CSS and JavaScript can be adjusted through the `browserslist` property in `package.json`.
