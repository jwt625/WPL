# WPL
WTJ's personal log template

This is my personal log template using HTML and javascript. Contents are mainly written in Markdown and are converted to HTML. TeX is also supported by MathJax. TODOs are formatted in JSON which is very easy to edit, and it's saved in `todos.json`. **Markdown and TeX** can also be used in the `content` property for TODOs.

The HTML pages mainly includes three columns, the first one for TODOs. You can put whatever you want in two other columns in the pages, which is included in two `week-<week number>-columns-<2 or 3>.md` files. You can select TODOs by date, status and tags.

## Screenshot
![example](https://raw.githubusercontent.com/jwt625/WPL/master/fig/example.png)

## Usage

1. Clone or download the repo
2. Add or edit TODOs in the `todos.json` file. E.g., change the `status` of a TODO from `todo` to `done`.
2. Edit the content in `week-<week number>-columns-<2 or 3>.md` files for the second and third column in the HTML page. Write anything you want using Markdown and TeX. JSON and Markdown are easy to learn!
3. Instead of refreshing the whole page, you can use the `Reload` button to update changes from `.json` and `.md` files to the html page. In case you have equations written in TeX, you can click the `Refresh MathJax` button to re-render equations after `Reload`.
4. TODOs can be saved as a variable named `todosLoaded` in `todos.js` or directly as a JSON file `todos.json` using `Save TODOs`.
5. For a new week, you can
	1. directly copy the `template.html`, change the title in the `<title>` environment and the content in the first `<div>` environment.
	2. create new `week-<week number>-columns-<2 or 3>.md` file to hold the content for the second and third column.
	3. you can add a new line in `index.html` and link it to the new html file.
	4. create new `week-<week number>` property in `todos.json` for new TODOs. The `<title>` section of the new HTML file, `week-<week number>` in todos.json and `week-<week number>` in the file name of `week-<week number>-columns-<2 or 3>.md` files should all be the same. For example, they are all currently `week-5` for this template.


## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) is used for Markdown to html conversion.
- Theme is from [Bootswatch](http://bootswatch.com).
- [Bootstrap](http://getbootstrap.com/)'s JavaScript file is required for functional dropdowns, modals, etc, in Bootswatch theme.
- [jQuery](https://jquery.com/) is required by Bootstrap.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) is used for saving TODOs to .js or .json file. [Blob.js](https://github.com/eligrey/Blob.js) might be required for some browser.

The above dependencies are already included in the project files and all the functionalities can work offline. You can find them in `/src/` and do not need to worry about.

- [MathJax](http://www.mathjax.org/) is used for rendering Tex/LaTeX. If you want to use it offline, you have to download and put it into `src`, and pointing the path to your `MathJax.js` in the html, i.e., change 
```js
<script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML'></script>
```
in the `<head>` environment to 
```js
<script type="text/javascript" src="path-to-your-MathJax-root/MathJax.js"></script>
```
You can still use it without changing anything if you have Internet connection.

## Possible issue

- It's forbidden to read local files in browser due to security. **This is highly possible the case** if you open the html in your browser but no TODO appears. Hence for TODOs you can alternatively use the `todos.js` to save TODOs as a global variable and load the `.js` file instead (which is a dirty way). To load from local `.json` and `.md` files, you have to, for example, start chrome with option `--allow-file-access-from-files`, e.g., in cmd on Windows:
```
start chrome full\path\to\the\index\index.html --allow-file-access-from-files
```
to enable local file access for chrome.
- The .js or .json file generated which you can download is within one line. You can use a json parser, e.g., [JSON Parser Online](http://json.parser.online.fr/) to make it more readable. [JSON Editor Online](http://www.jsoneditoronline.org/) is also recommended for formatting and editting json (if you don't like to edit json in a text editor).
- You have to dowload and set up MathJax to use it without Internet connection, see [Dependencies](#dependencies).
- Be aware about the Markdown's XSS vulnerability. See, e.g., [Markdown's XSS Vulnerability (and how to mitigate it)](https://github.com/showdownjs/showdown/wiki/Markdown's-XSS-Vulnerability-(and-how-to-mitigate-it)).
- I put a JSON Editor for TODOs generated by [json-editor](https://github.com/jdorn/json-editor) in [jsoneditor.html](https://jwt625.github.io/WPL/template/jsoneditor.html). You can try using [it](https://jwt625.github.io/WPL/template/jsoneditor.html) to generate your TODOs.


## TODO
- [x] automatically generate date selection buttons
- [x] automatically generate tag selection buttons
- [x] read TODOs from file
- [x] read markdown from file
- [x] add load and refresh
- [ ] enable multiple tags for one todo.

## Acknowledgement
- Thank [Chris](https://github.com/CSarabalis) for introducing logging using markdown-to-html to me :)
- [Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify) is used for formatting codes.
