# WPL
WTJ's personal log template

This is my personal log template in HTML.

## Dependencies

[Showdown](https://github.com/showdownjs/showdown) is used for Markdown to html conversion.

Theme from [Bootswatch](http://bootswatch.com).
You must include [Bootstrap](http://getbootstrap.com/)'s JavaScript file to have functional dropdowns, modals, etc.
[jQuery](https://jquery.com/) is required by Bootstrap.

The above dependencies are already included in the project files and all the functionalities can work offline. You can find them in `/src/`.

In addition, [MathJax](http://www.mathjax.org/) is included for rendering Tex/LaTeX, 
which you have to download and put into `src`, and pointing the path to your `MathJax.js` in the html.

Javascript is used to respond to selection of date, status and tag for todos.

## Usage (if any...)

Simply clone the repo and edit the content where you recognize the markdown syntax.

For TODOs, I use a `todos` object to enable selections.
Currently you have to call addTodo method to in the last `<script>` environment to add new todo. See comments in template.html for detail.

## TODO
- [ ] enable multiple tags for one todo.
- [ ] automatically generate selection buttons
