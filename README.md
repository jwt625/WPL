# WPLT
WTJ's personal log template

This is my personal log template using HTML and javascript. Contents are mainly written in Markdown and are converted to HTML. TeX is also supported by MathJax. TODOs and course Info are formatted in JSON which is very easy to edit, and it's saved in `todos.json` and `courses.json`. **Markdown and TeX** can also be used in the `content` property for TODOs.


## Screenshot
![example](https://raw.githubusercontent.com/jwt625/WPL/master/fig/example.png)

## Usage

1. Clone or download the repo
2. Add or edit TODOs in the `todos.json` file. E.g., change the `status` of a TODO from `todo` to `done`.
3. Edit the information about the courses in `courses.json`, the time table is generated automatically. Very easy to understand the information in the `courses.json`.
4. Take notes about each courses in the corresponding MD file.


## Dependencies

- [Showdown](https://github.com/showdownjs/showdown) for Markdown to HTML conversion.
- [showdown-toc](https://github.com/jwt625/showdown-toc) for generating table of content.
- [highlight.js](https://highlightjs.org/)
- [Bootswatch](http://bootswatch.com) and [Bootstrap](http://getbootstrap.com/) for theme.
- [jQuery](https://jquery.com/) is required by Bootstrap.
- [FileSaver.js](https://github.com/eligrey/FileSaver.js) for saving TODOs to .js or .json file. [Blob.js](https://github.com/eligrey/Blob.js) might be required for some browser.
- [viz.js](https://github.com/mdaines/viz.js) for [Graphviz](http://www.graphviz.org/).

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

## Keyboard shortcuts
- Shift: show/hide TODO
- r: reload all
- 1: reload TODO
- 2: reload courses and notes
- t: show TODO with status `todo`
- d: show TODO with status `done`
- u: show TODO with status `undone`
- a: show TODO with all status
- h: run code highlight


## Possible issue

- It's forbidden to read local files in browser due to security. **This is highly possible the case** if you open the html in your browser but no TODO appears. Hence for TODOs you can alternatively use the `todos.js` to save TODOs as a global variable and load the `.js` file instead (which is a dirty way). To load from local `.json` and `.md` files, you have to, for example, start chrome with option `--allow-file-access-from-files`, e.g., in cmd on Windows:
```
start chrome full\path\to\the\index.html --allow-file-access-from-files
```
to enable local file access for chrome.
- You have to push `h` to run code highlight (since there's not always some code to highlight)
- If you are not familiar with TeX or MathJax, see [MathJax basic tutorial and quick reference](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

<!--
## TODO
- [x] automatically generate date selection buttons
- [x] automatically generate tag selection buttons
- [x] read TODOs from file
- [x] read markdown from file
- [x] add load and refresh
- [ ] enable multiple tags for one todo.
-->

## Acknowledgement
- Thank [Chris](https://github.com/CSarabalis) for introducing logging using markdown-to-html to me :)
- [Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify) is used for formatting codes.
