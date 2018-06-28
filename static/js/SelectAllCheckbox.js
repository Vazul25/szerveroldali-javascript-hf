
var checked=false;
function selectAllCheckbox(source,name) {
    checked=!checked;
    checkboxes = document.getElementsByName(name);
    for(var i in checkboxes)
        checkboxes[i].checked = checked;
}

