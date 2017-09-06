import ace from 'ace';
import './my-mode';
import validate from '../lib/validate';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.getSession().setMode("ace/mode/my-mode");
var Range = ace.require('ace/range').Range;

var markers = [];

editor.getSession().on('change', function () {
    var errors = validate(editor.getValue());
    var session = editor.getSession();
    markers.forEach(marker => session.removeMarker(marker));
    markers = [];
    session.setAnnotations(errors.map(error => ({
        row: error.line,
        column: error.column,
        text: error.text,
        type: "error" // also warning and information
    })));

    errors.forEach((error) => {
        markers.push(session.addMarker(new Range(error.line, error.column, error.line, error.column + error.length), "lint-mark-error", false));
    });
});