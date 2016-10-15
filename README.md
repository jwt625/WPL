# WPL
WTJ's personal log template

This is my personal log template using HTML.

## Dependencies

[Showdown](https://github.com/showdownjs/showdown) is used for Markdown to html conversion.

Theme from [Bootswatch](http://bootswatch.com).
You must include [Bootstrap](http://getbootstrap.com/)'s JavaScript file to have functional dropdowns, modals, etc.
[jQuery](https://jquery.com/) is required by Bootstrap.

The above dependencies are already included in the project files and all the functionalities can work offline. You can find them in `/src/`.

In addition, [MathJax](http://www.mathjax.org/) is included for rendering Tex/LaTeX, 
which you have to download and put into `src`, and pointing the path to your `MathJax.js` in the html.

Javascript is used to respond to selection of date, status and tag for TODOs.

## Usage (if any...)

Simply clone the repo and edit the content where you recognize the markdown syntax.

For TODOs, I use a `todos` object to enable selections.

TODOs can be saved as a variable in `todos.js` or as a JSON file. However it's hard to load JSON file locally, hence I use the `todos.js` to save TODOs. To load from JSON, you have to use, for example, `chrome --allow-file-access-from-files` to enable local file access for chrome.

You can directly add or edit TODOs in the `.js` file.

## TODO
- [x] automatically generate selection buttons
- [x] read todo from file
- [ ] enable multiple tags for one todo.
