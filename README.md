# WPL
WTJ's personal log template

This is my personal log template using HTML.
TODOs are written in JSON which is relatively easy to edit, and it's saved in `todos.json`.
You can put other stuff in two other columns in the pages, which is included in two `week-i-columns-j.md` files.

## Usage (if any...)

Simply clone the repo and edit the content in `.json` and `.md` files. JSON and Markdown are easy to learn.

Use the `Reload` button to update changes from files to the html page. In case you have equations written in TeX, you can click the `Refresh MathJax` button to reformat equations.

TODOs can be saved as a variable in `todos.js` or directly as a JSON file `todos.json`. 

You can directly add or edit TODOs in the `.js` or `.json` file.

## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) is used for Markdown to html conversion.
- Theme is from [Bootswatch](http://bootswatch.com).
- You must include [Bootstrap](http://getbootstrap.com/)'s JavaScript file to have functional dropdowns, modals, etc.
- [jQuery](https://jquery.com/) is required by Bootstrap.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) is used for saving TODOs to .js or .json file. [Blob.js](https://github.com/eligrey/Blob.js) might be required for some browser.

The above dependencies are already included in the project files and all the functionalities can work offline. You can find them in `/src/`.

In addition, [MathJax](http://www.mathjax.org/) is included for rendering Tex/LaTeX, 
which you have to download and put into `src`, and pointing the path to your `MathJax.js` in the html if you want to use it offline.

## Possible issue

- It's hard to load JSON file locally due to security, hence I use the `todos.js` to save TODOs. To load from JSON, you have to use, for example, start chrome with option `--allow-file-access-from-files` (`chrome --allow-file-access-from-files`) to enable local file access for chrome.
- The .js or .json file downloaded is not in a good format. You can use a json parser, e.g., [json parser online](http://json.parser.online.fr/) to make it more readable.


## TODO
- [x] automatically generate selection buttons
- [x] read todo from file
- [x] read markdown from file
- [x] add load and refresh
- [ ] enable multiple tags for one todo.
