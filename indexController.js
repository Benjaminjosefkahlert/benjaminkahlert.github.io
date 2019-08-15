// Function that adds text to the terminal-type-face element
var caption = '';
var responseCaption = '';
var numNewLines = 0;
const maxLines = 21;

const commands = {
        'help': {
                message: 'List of valid commands:\nabout -- my general information\ninfo -- information about the website itself\nresume   -- opens my resume in a PDF format\nlinkedin -- opens a new tab directed to my linkedin profile\ncontact  -- my contact information\nhelp -- lists all valid commands\nclear -- clears the terminal\n--------------------------------------\n'
        },
        'about': {
                message: 'Hello!\nI\'m Ben Kahlert.\nI\'ve had a huge interest in anything computer related ever since I was a kid.\nMy hobbies include anything video game related, hiking, and tennis.\nMy most desired attribute for a software job is that I just want to make cool things!\nI\'m well versed with C, Java, JavaScript, React, Vue, C#, and several other relevant languages.\n--------------------------------------\n'
        },
        'info': {
                message: 'Welcome to my self-made online portfolio!\nI modeled the fun bit of this website after a windows cmd prompt\nbecause I thought it was unique and cool.\nI made the site with vanilla JS, HTML, and CSS.\nI thought using a framework like React would be overkill...\n--------------------------------------\n'
        },
        'resume': {
                message: 'Openining resume in new tab...\n--------------------------------------\n',
                url: 'assets/resume.pdf'
        },
        'linkedin': {
                message: 'Openining linkedin profile new tab...\n--------------------------------------\n',
                url: 'https://www.linkedin.com/in/benjamin-kahlert-0b4709126/'
        },
        'contact': {
                message: 'My preferable form of contact is email:\nBenjaminjosefkahlert@gmail.com\n--------------------------------------\n'
        },
        'clear': {
                message: '',
                clear: true
        },
        'unknown': {
                message: 'The entered command is not recognized, please type \'help\' for a list of valid commands\n--------------------------------------\n'
        }
};

function addText(keyCode) {
    // Check for garbage characters and backspace
    if (keyCode === 8) {
        var tempCaption = '';
        for (var i = 0; i < caption.length - 1; i++)
            tempCaption += caption[i];
        caption = tempCaption;
        document.getElementById('caption').innerHTML = caption;
        return;
    }

    // Bounds check on caption
    if (caption.length > 30)
        return;

    // Add to caption of the keyCode is between a certain range
    if (keyCode >= 65 && keyCode <= 90 || keyCode == 32) {
        var character = String.fromCharCode(keyCode);
        character = character.toLowerCase();
        caption = caption + character;
        document.getElementById('caption').innerHTML = caption;
    }
}

function enter() {
    if (commands[caption] == undefined)
        sendResponse(commands['unknown'].message, caption)
    else
        sendResponse(commands[caption].message, caption);
    caption = '';
    document.getElementById('caption').innerHTML = caption;
}

function sendResponse(response, caption) {
    var newLines = getNumberOfNewLines(response);
    var existingNewLines = getNumberOfNewLines(responseCaption);
    if (newLines + existingNewLines > maxLines) {
        var leftover = (newLines + existingNewLines) - maxLines;
        var startingChar = getPosition(responseCaption, '\n', leftover - 1);
        responseCaption = responseCaption.substring(startingChar + 1, responseCaption.length);
        document.getElementById('response').innerHTML = responseCaption;
    }
    if (commands[caption] && commands[caption].url)
        openInNewTab(commands[caption].url);
    responseCaption += response;
    document.getElementById('response').innerHTML = responseCaption;
    if (commands[caption] && commands[caption].clear)
        clearTerminal();
}

function clearTerminal() {
    document.getElementById('response').innerHTML = "";
    responseCaption = "";
}

// Opens a new tab with the given url
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

// Gets number of new lines in the responseCaption
function getNumberOfNewLines(text) {
    var tempLines = 0;
    for (var i = 0; i < text.length; i++)
        if (text[i] == '\n')
            tempLines++;
    return tempLines;
}

// Helps to get nth occurence in string
function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

// Adds a key event listener
document.addEventListener('keydown', function(event) {
    if (event.keyCode != 13)
        addText(event.keyCode);
    else
        enter();
});

$(document).ready(function() {
    setInterval('cursorAnimation()', 600);
    responseCaption = 'Please interact with this terminal! Type \'help\' for a list of valid commands...\n--------------------------------------\n';
    document.getElementById('response').innerHTML = responseCaption;
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}