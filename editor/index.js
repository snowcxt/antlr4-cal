
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/my-mode");

editor.getSession().on('change', function () {
    editor.getSession().setAnnotations([{
        row: 0,
        column: 2,
        text: "Hier stimmt was nicht",
        type: "error" // also warning and information
    }]);
});