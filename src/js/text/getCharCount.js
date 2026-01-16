// getCharCount.js

function getCharCount(whichElement)
{
    let data = ge(whichElement).textContent;

    // remove newline characters and spaces from the count
    let cleanedData = data.replace(/\n/g, '').replace(/\s/g, '');

    // count the length of the cleaned data
    let charCount = cleanedData.length;

    return charCount;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

