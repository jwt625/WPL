# Courses

[toc]

## Data Structure
test some code:
```javascript
// load multiple MD files to one target
function loadMDs(sourcefiles, targetid, tmpdata) {
	if (!tmpdata) {
		var tmpdata = "";
	}
	jQuery.get(sourcefiles[0], function(data) {
		tmpdata = tmpdata + data + "\n";
		if (sourcefiles.length > 1) {
			loadMDs(sourcefiles.slice(1, sourcefiles.length), targetid, tmpdata);
		} else {
			var html = converter.makeHtml(tmpdata)
			document.getElementById(targetid).innerHTML = html;
			refreshMathJax();
		}
	});
}
```