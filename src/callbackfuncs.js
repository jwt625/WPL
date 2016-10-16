function loadAll(){
    loadJSON(loadJSONCallBack)
    loadMD(document.title + "-column-2.md", 'target-column-2');
    loadMD(document.title + "-column-3.md", 'target-column-3');
}

function refreshMathJax(){
	MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
};

function loadJSON(callback) {
  $.getJSON('todos.json', function (data) {
    callback(data);
  });
};

function loadMD(sourcefile, targetid){
	jQuery.get(sourcefile, function(data) {
	html = converter.makeHtml(data);
	document.getElementById(targetid).innerHTML = html;
});};

function loadJSONCallBack(data) {
	// var todosLoaded = data;
	// console.log(todosLoaded);	
	// var week = document.title;
	document.todos = data;
	// console.log(document.todos);
	displayToDos(todoDisplayConfig);
	generateSelectDateButtGroup();
};

function loadMDButtCallBack(obj){
	console.log(obj.id)
	sourcefile = document.title + "-" + obj.id + ".md";
	targetid = "target-" + obj.id;
	loadMD(sourcefile, targetid);
};
// displayToDos(todoDisplayConfig);

// generateSelectDateButtGroup();

function generateSelectDateButtGroup(){
	week = document.title;
	html = [];
	html[0] = "<li><a onclick=\"selectDateClicked(this)\">All dates</a></li>\n";
	html[1] = "<li class=\"divider\"></li>\n";
	for (date in todosLoaded[week]){
		len = html.length;
		html[len] = "<li><a onclick=\"selectDateClicked(this)\">" + date + "</a></li>\n";
	}
	document.getElementById("btn-group-date").innerHTML = html.join("");
};

function generateMD_Item(item, selectStatus, selectTag) {
    if (item.status === "done") {
        prefix = "- [x] ";
        suffix = "";
    } else if (item.status === "undone") {
        prefix = "- [ ] ~~";
        suffix = "~~";
    } else {
        prefix = "- [ ]";
        suffix = "";
    }
    if (!selectStatus) {
        if (!selectTag) {
            return prefix + item.content + suffix;
        }
        if (item.tag === selectTag) {
            return prefix + item.content + suffix;
        } else {
            return "";
        }
    }
    if (item.status === selectStatus) {
        if (!selectTag) {
            return prefix + item.content + suffix;
        }
        if (item.tag === selectTag) {
            return prefix + item.content + suffix;
        } else {
            return "";
        }
    } else {
        return "";
    }
};

function generateMD_Date(selectedDate, dateName, selectStatus, selectTag) {
    mdString = "### " + dateName + "\n";
    for (item in selectedDate) {
        // now this selectedDate is a date object, item is todo object
        try {
            mdString = mdString + generateMD_Item(selectedDate[item], selectStatus, selectTag) + "\n";
        } catch (e) {}
    }
    return mdString;
};

function generateMD_Week(selectedWeek, selectDate, selectStatus, selectTag) {
    if (!selectDate) {
        mdString = "## TODO" + "\n";
        for (date in selectedWeek) {
            try {
                mdString = mdString + generateMD_Date(selectedWeek[date], date, selectStatus, selectTag) + "\n";
            } catch (e) {}
        }
    } else {
        mdString = "## TODO" + "\n";
        for (date in selectedWeek) {
            try {
                if (date == selectDate) {
                    mdString = mdString + generateMD_Date(selectedWeek[date], date, selectStatus, selectTag) + "\n";
                }
            } catch (e) {}
        }
    }
    return mdString
};

function displayToDos(config) {
	todosLoaded = document.todos;
	week = document.title;
    html = converter.makeHtml(generateMD_Week(todosLoaded[week], config[0], config[1], config[2]));
    document.getElementById('target-todo').innerHTML = html;
};

function selectDateClicked(obj) {
    date = obj.innerHTML;
    document.getElementById('btn-date').innerHTML = date;
    if (date.match("All")) {
        todoDisplayConfig[0] = 0;
        displayToDos(todoDisplayConfig);
    } else {
        todoDisplayConfig[0] = date;
        displayToDos(todoDisplayConfig);
    }
};

function selectStatusClicked(obj) {
    status = obj.innerHTML;
    document.getElementById('btn-status').innerHTML = status;
    if (status.match("All")) {
        todoDisplayConfig[1] = 0;
        displayToDos(todoDisplayConfig);
    } else {
        todoDisplayConfig[1] = status;
        displayToDos(todoDisplayConfig);
    }
};

function selectTagClicked(obj) {
    tag = obj.innerHTML;
    document.getElementById('btn-tag').innerHTML = tag;
    if (tag.match("All")) {
        todoDisplayConfig[2] = 0;
        displayToDos(todoDisplayConfig);
    } else {
        todoDisplayConfig[2] = tag;
        displayToDos(todoDisplayConfig);
    }
};

function saveClicked(obj){
	saveOption = obj.innerHTML;
	if(saveOption.match("json")){
		blob = new Blob([JSON.stringify(todosLoaded)], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "todos.json");
	}else{
		blob = new Blob(["var todosLoaded = ",JSON.stringify(todosLoaded), ";"], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "todos.js");
	}
};