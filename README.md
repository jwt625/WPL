# WPL
WTJ's personal log template

This is my personal log template using HTML. TODOs are written in JSON which is relatively easy to edit, and it's saved in `todos.json`. You can put other stuff in two other columns in the pages, which is included in two `week-<week number>-columns-<2 or 3>.md` files.

## Screenshot
![example](https://raw.githubusercontent.com/jwt625/WPL/master/fig/example.png)

## Usage (if any...)

Simply clone the repo and edit the content in `.json` and `.md` files. JSON and Markdown are easy to learn.

Use the `Reload` button to update changes from `.json` and `.md` files to the html page. In case you have equations written in TeX, you can click the `Refresh MathJax` button to re-render equations after `Reload`.

TODOs can be saved as a variable named `todosLoaded` in `todos.js` or directly as a JSON file `todos.json`. 

You can directly add or edit TODOs in the `.json` file.

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
- [x] automatically generate selection buttons
- [x] read TODOs from file
- [x] read markdown from file
- [x] add load and refresh
- [ ] enable multiple tags for one todo.

## Acknowledgement
- 