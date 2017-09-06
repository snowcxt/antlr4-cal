
import ace from 'ace';
import './my-mode';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/my-mode");
var Range = ace.require('ace/range').Range;
editor.getSession().on('change', function () {
    editor.getSession().setAnnotations([{
        row: 2,
        column: 2,
        text: "Hier stimmt was nicht",
        type: "error" // also warning and information
    }]);
    editor.session.addMarker(new Range(2, 2, 2, 3), "lint-mark-error", false);
});