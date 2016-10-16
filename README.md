# WPL
WTJ's personal log template

This is my personal log template using HTML. Contents are mainly written in Markdown and are converted to HTML. TODOs are formatted JSON which is relatively easy to edit, and it's saved in `todos.json`. Markdown and TeX can also be used in the `content` property for TODOs.

The HTML pages mainly includes three columns, the first one for TODOs. You can put whatever you want in two other columns in the pages, which is included in two `week-<week number>-columns-<2 or 3>.md` files. You can select TODOs by date, status and tags.

## Screenshot
![example](https://raw.githubusercontent.com/jwt625/WPL/master/fig/example.png)

## Usage

1. Clone or download the repo
2. Add or edit TODOs in the `todos.json` file. E.g., change the `status` of a TODO from `todo` to `done`.
2. Edit the content in `week-<week number>-columns-<2 or 3>.md` files for the second and third column in the HTML page. Write anything you want using Markdown and TeX. JSON and Markdown are easy to learn!
3. Use the `Reload` button to update changes from `.json` and `.md` files to the html page. In case you have equations written in TeX, you can click the `Refresh MathJax` button to re-render equations after `Reload`.
4. TODOs can be saved as a variable named `todosLoaded` in `todos.js` or directly as a JSON file `todos.json` using `Save TODOs`.
5. For a new week, you can
	1. direct copy the `template.html`, change the title and the content in the first `<div>` environment.
	2. create new `week-<week number>-columns-<2 or 3>.md` file to hold the content.
	3. remember to set the link to the new html in `index.html`.
	4. the `<title>` section of the HTML file, `week-<week number>` in todos.json and `week-<week number>` in `week-<week number>-columns-<2 or 3>.md` should be all the same. For example, they are all currently `week-5` for this template.


## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) is used for Markdown to html conversion.
- Theme is from [Bootswatch](http://bootswatch.com).
- [Bootstrap](http://getbootstrap.com/)'s JavaScript file is required for functional dropdowns, modals, etc, in Bootswatch theme.
- [jQuery](https://jquery.com/) is required by Bootstrap.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) is used for saving TODOs to .js or .json file. [Blob.js](https://github.com/eligrey/Blob.js) might be required for some browser.

The above dependencies are already included in the project files and all the functionalities can work offline. You can find them in `/src/` and do not need to worry about.

In addition, [MathJax](http://www.mathjax.org/) is used for rendering Tex/LaTeX, 
which you have to download and put into `src`, and pointing the path to your `MathJax.js` in the html if you want to use it offline. You can still use it without changing anything if you have Internet connection.

## Possible issue

- It's hard to load JSON file locally due to security, hence you can use the `todos.js` to save TODOs and directly load the `.js` file instead. To load from JSON, you have to, for example, start chrome with option `--allow-file-access-from-files` (`chrome --allow-file-access-from-files`) to enable local file access for chrome.
- The .js or .json file downloaded is within one line. You can use a json parser, e.g., [json parser online](http://json.parser.online.fr/) to make it more readable.


## TODO
- [x] automatically generate date selection buttons
- [ ] automatically generate tag selection buttons
- [x] read TODOs from file
- [x] read markdown from file
- [x] add load and refresh
- [ ] enable multiple tags for one todo.

## Acknowledgement
- Thank [Chris](https://github.com/CSarabalis) for introducing logging using markdown-to-html to me :)
- [Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify) is used for formatting codes.