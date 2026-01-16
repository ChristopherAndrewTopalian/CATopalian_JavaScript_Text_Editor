// saveSelection.js

let savedSelection = null;

function saveSelection()
{
    let sel = window.getSelection();
    if (sel.rangeCount > 0)
    {
        savedSelection = sel.getRangeAt(0);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

