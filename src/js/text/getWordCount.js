// getWordCount.js

function getWordCount(whichElement)
{
    let data = ge(whichElement).value;

    // remove any leading or trailing whitespace and split the data into words
    let wordsArray = data.trim().split(/\s+/);

    // count the number of words in the array
    let wordCount = wordsArray.length;

    return wordCount;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

