// download.js

function download(whichElement) 
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

