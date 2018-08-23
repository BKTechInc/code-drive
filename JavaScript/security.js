(function (security) {
    'use strict';

    var timeout = 60 * 1000;

    function time() {
        return new Date().getTime();
    }

    function updateTime() {
        localStorage[".time"] = time().toString();
    }

    function askForPass() {
        if (prompt("Password:") === "abc") {
            updateTime();
        } else {
            window.close();
        }
    }

    function checkValid() {
        if (time() - parseInt(localStorage[".time"]) > timeout) {
            askForPass();
        }
    }
    if (localStorage[".time"] === undefined) {
        updateTime();
    }
    window.onblur = updateTime;
    window.onfocus = checkValid;
    checkValid();
})();