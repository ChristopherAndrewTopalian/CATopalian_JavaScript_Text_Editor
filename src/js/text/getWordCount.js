// getWordCount.js

function getWordCount(whichElement)
{
    // Use innerText to properly capture visual line breaks as \n
    let data = ge(whichElement).innerText;

    // Safety check: if the box is empty, return 0
    if (data.trim() === '') 
    {
        return 0;
    }

    // Split by any whitespace (spaces, tabs, newlines)
    let wordsArray = data.trim().split(/\s+/);

    return wordsArray.length;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

