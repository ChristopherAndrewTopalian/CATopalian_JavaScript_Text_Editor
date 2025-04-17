// download.js

function download(whichElement)
{
    // get html content (not plain text)
    let data = ge(whichElement).innerHTML;

    // create an anchor element
    let ourElement = ce("a");

    // use html mime type
    let theType = new Blob([data],
    {
        type: "text/html"
    });

    // create temp url and assign to href
    ourElement.href = window.URL.createObjectURL(theType);

    // use .html extension to preserve formatting
    ourElement.download = ge('nameOfFileInput').value + '.html';

    // trigger download
    ourElement.click();
}

function downloadTxt(whichElement) 
{
    // get data from specified Text Area
    let data = ge(whichElement).value;

    // create an anchor element
    let ourElement = ce("a");

    // choose text/plain for .txt .html .js .py
    let theType = new Blob([data],
    {
        type: "text/plain"
    });

    // creates a temp URL for the object
    // the object is a file or a blob
    // and assigns it to the href attribute of ourElement
    // this allows it to downloaded (accessed)
    ourElement.href = window.URL.createObjectURL(theType);

    ourElement.download = ge('nameOfFileInput').value + '.txt'; //'filename.txt';

    ourElement.click();
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

