# Readme

These webpages are all generated from Markdown, which is very easy to learn. The only thing you have to do is to edit the content in those `.md` files, and the corresponded `.html` files will automatically load from the .md files and display the pages. Equations written in TeX are also supported by [MathJax](https://www.mathjax.org/). If you see some wierd `$` in the page, simply click the `Refresh MathJax` button to render the equations.

However, you cannot directly edit the `.md` files in the ftp server. You can download them, edit on your own computer and then upload and replace the old files. I suggest using [FileZilla](https://filezilla-project.org/) to connect to the ftp, where you can directly choose to edit the file by right click on it and FileZilla will take care of the rest (it will ask you whether to upload the file or not if it detected any change of the file). After uploading your new .md files, you should be able to see changes of the webpage after refreshing it.

For editting `.md` files, you can use Windows' Notepad, since Markdown's grammar is very simple. You can also use other Markdown Editors such as some online editor like [demo of Showdown](http://showdownjs.github.io/demo/), which can display the resulting HTML page. Personally I use [Sublime Text](https://www.sublimetext.com/) which has some syntax highlight and auto-completion. You can also use it to edit a large variaties of files,such as HTML.

If you want to copy all these pages and edit them on your own computer, it's highly recommended to use FileZilla to transfer the files. Windows' Explorer have some bugs for ftp connection if you copy too much files at one time. Or you can choose **NOT** to copy the `MathJax-2.6-latest` folder in the `src` folder, which contains more than 29000 files (you know, for rendering equations). Instead, download [it (packed)](../src/MathJax-2.6-latest.rar) and release to the same path by yourself. There is another issue for editting them on your own computer: it's usually forbidden for browsers to read your local files for safety (such as those .md files) and it will show only the title of those pages, you have to change the settings of your browser. If you have installed Google Chrome on Windows, you can run `start chrome --allow-file-access-from-files` in command line to start Chrome with file access, then open the .html file, those pages will be correctly displayed. (Or you can create a new text file, type `start chrome --allow-file-access-from-files` in it, modify the file suffix to `.bat` and then you can run it whenever you want to open Chrome with file access.)

You can find some most frequently used Markdown grammar in this template below. (And also some simple example of equations in TeX.)

You can compare between this page and the [readme.md](readme.md) file (from which this page is generated) to see how it works.

## Headings:

# This is a first order heading
## This is a second order heading
### This is a third order heading
#### This is a fourth order heading

This is ordinary text. Extra        spaces         in markdown text won't appear on the page.
You have to use an empty line to start a new paragraph.

Like this.

## Equations:
This is an inline equation: $e^{i\theta} = \cos \theta + i\sin \theta$.

This is a large equation which you want to put separately:
<p>$$
\int_{\Omega} d\omega = \int_{\partial \Omega} \omega
$$</p>
the `<p>` environment is used for preventing the equation being blurred by the Markdown to HTML converter.

You can also color it:
<p class="text-warning">$$
\int_{\Omega} d\omega = \int_{\partial \Omega} \omega
$$</p>

## List:

Below is a unnumbered list:
- blablabla
- blablabla
- blablabla

Below is a numbered list:
1. point one
2. point two
3. point three

You can nest different levels of lists by using tab:
1. something
2. something
	1. point one
	2. point two
	3. point three
3. something
	- unnumbered point
	- another unnumbered point

Below is a checklist:
- [ ] something todo
	1. blablabla
	2. blablabla
- [x] something already done

##Tables:
`|` is used to divide different column. See `template.md`

The second row must be composed of `|-----|`(left aligned column) or `|:-----:|`(centered column) or `|----:|` (right aligned).

| column 1|column 2|column 3|
|---------|:--------------:|------:|
|blablabla|blabla|blablabla|
|This column is left aligned.|This column is centered.|This column right aligned.|
|You can also put equation in a table.| Like this: $e^{i\pi}+1=0$|nothing here|

## Links and Images:

This is a [link to index](../index.html). You can use both relative or absolute address. This is another link to [wikipedia](https://www.wikipedia.org/).

Below is an image. ([Showdown](http://showdownjs.github.io/demo/) is the name of one project which convert Markdown language to HTML)

![image](figures/logo.showdown.png =200x*)

Below is a gif file (from the supplimentary material of [this](http://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.6.044010) paper).

![image](figures/MovieS03_Bejanin.gif =500x*)

## Others:

下面是一条分割线 (注意需要提行)：


----------------------------

下面是一段引用：
> blablabla
blablabla
>> 这是一个嵌套的引用
>
> 这是另一行


## Styles:

This is an *italic* word.

This is an **improtant** word.

This is ~~a deleted word~~.

This is some `programming code` that you can put within one line.

You can also put some block of codes:
```js
while(1){
	printf("Hellow world!\n");
}
```

### If you want some text with color, you can directly use HTML environment:

<p class="text-muted">This is where stuff will be displayed.</p>
<p class="text-primary">This is where stuff will be displayed.</p>
<p class="text-warning">This is where stuff will be displayed.</p>
<p class="text-danger">This is where stuff will be displayed.</p>
<p class="text-success">Coloring is even working with equations: $e^{i\theta} = \cos \theta + i\sin \theta$. </p>
<p class="text-info">This is where stuff will be displayed.</p>
### <p class="text-info">You can also combine color with headings (This is third order heading).</p>
