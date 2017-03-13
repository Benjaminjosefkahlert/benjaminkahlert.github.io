//Function that adds text to the TerminalTypeface element
var caption = "";
var responseCaption = "";
var numNewLines = 0;

function addText(keyCode) {
    //Check for garbage characters and backspace
    if (keyCode == 8) {
        var tempCaption = "";
        for (var i = 0; i < caption.length - 1; i++) {
            tempCaption += caption[i];
        }
        caption = tempCaption;
        document.getElementById('caption').innerHTML = caption;
        return;
    }

    //Bounds check on caption
    if (caption.length > 30) {
        return;
    }

    //Add to caption of the keyCode is between a certain range
    if (keyCode >= 65 && keyCode <= 90 || keyCode == 32) {
        var character = String.fromCharCode(keyCode);
        character = character.toLowerCase();
        caption = caption + character;
        document.getElementById('caption').innerHTML = caption;
        //var br = document.createElement('br');
        //document.getElementById('caption').appendChild(br);
    }
}

function enter() {
    var responseElement = document.getElementById('response');
    //responseElement.innerHTML = "";

    if (caption == "usage" || caption == "ls") {
        if (caption == "ls") {
            console.log("You're a programmer!!!");
        }
        usage();
    } else if (caption == "resume") {
        resume();
    } else if (caption == "linkedin") {
        linkedin();
    } else if (caption == "clear") {
        clearTerminal();
    } else if (caption == "about") {
        about();
    } else if (caption == "contact") {
        contact();
    } else if (caption == "info") {
        info();
    } else if (caption == "standard") {
        standard();
    } else {
        clear();
    }

    caption = "";
    document.getElementById('caption').innerHTML = caption;
}

function usage() {
    var response = "List of valid commands:\nabout -- my general information\ninfo -- information about the website itself\nstandard -- opens the standard website format in a new tab\nresume   -- opens my resume in a PDF format\nlinkedin -- opens a new tab directed to my linkedin profile\ncontact  -- my contact information\nusage -- lists all valid commands\nclear -- clears the terminal\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function info() {
    var response = "This website is modeled after a windows command prompt.\nIt was created using HTML, CSS, and javascript.\nBecause the interactive nature of the website may be a barrier for some\nI have included also created a standard website with some basic information.\nYou may either type 'standard' in the terminal\nor make the page smaller to access it.\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function resume() {
    var response = "Openining resume in new tab...\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    openInNewTab("ResumeNew.pdf");
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function standard() {
    var response = "Openining standard web page in new tab...\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    var win = window.open("standardIndex.html", '_blank');
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function linkedin() {
    var response = "Openining linkedin profile new tab...\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    openInNewTab("https://www.linkedin.com/in/benjamin-kahlert-0b4709126/");
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function about() {
    var response = "Hello!\nI'm Ben Kahlert.\nSince I was young I've always had an interest in computers and technology.\nFlash forward quite a bit, and now I'm at Purdue learning about my passion.\nI think all aspects of computer science are cool, but my specific interests involve:\nSoftware engineering\nand AI.\nIm quite comfotable with an assortment of high and low level languages, including:\nJava, C, C++, javascript, and NodeJS.\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function contact() {
    var response = "My preferable form of contact is email:\nBenjaminjosefkahlert@gmail.com\n--------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

function clearTerminal() {
    var responseElement = document.getElementById('response').innerHTML = "";
    responseCaption = "";
}

function clear() {
    var response = "Command not found: '" + caption + "'... \nType 'usage' for help...\n-------------------------------------\n";
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > 24) {
        var leftover = (newLines + existingNewLines) - 24;
        var startingChar = getPosition(responseCaption, "\n", leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        var responseElement = document.getElementById('response').innerHTML = responseCaption;
    }
    responseCaption += response;
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
}

//Opens a new tab with the given url
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function openLinkedIn() {
        var win = window.open("https://www.linkedin.com/in/benjamin-kahlert-0b4709126/", '_blank');
        win.focus();
}

function openGitHub() {
        var win = window.open("https://github.com/Benjaminjosefkahlert", '_blank');
        win.focus();
}

function openResume() {
        var win = window.open("ResumeNew.pdf", '_blank');
        win.focus();
}
//Gets number of new lines in the responseCaption
function getNumberOfNewLines(text) {
    var tempLines = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] == "\n") {
            tempLines++;
        }
    }
    return tempLines;
}

//Helps to get nth occurence in string
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

//Adds a key event listener
document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    var keyCode = event.keyCode;

    if (keyCode != 13) {
        addText(keyCode);
    } else {
        enter();
    }
});

$(document).ready(function() {
    //Init
    setInterval('cursorAnimation()', 600);
    responseCaption = "Type 'usage' for help...\nTo visit the standard version of the webpage, type 'standard'.\n--------------------------------------\n";
    var responseElement = document.getElementById('response').innerHTML = responseCaption;
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

