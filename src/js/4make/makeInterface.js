// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let textInfoContainer = ce('div');
    textInfoContainer.id = 'textInfoContainer';
    textInfoContainer.style.display = 'flex';
    textInfoContainer.style.flexDirection = 'row';
    mainDiv.append(textInfoContainer);

    //-//

    let characterCountText = ce('div');
    characterCountText.id = 'characterCountText';
    characterCountText.className = 'textInfoStyle';
    characterCountText.title = 'Char Count';
    characterCountText.textContent = '0 chars';
    textInfoContainer.append(characterCountText);

    let charCountWithSpacesText = ce('div');
    charCountWithSpacesText.id = 'charCountWithSpacesText';
    charCountWithSpacesText.className = 'textInfoStyle';
    charCountWithSpacesText.title = 'Char Count with Spaces';
    charCountWithSpacesText.textContent = '0 chars';
    textInfoContainer.append(charCountWithSpacesText);

    //-//

    let wordCountText = ce('div');
    wordCountText.id = 'wordCountText';
    wordCountText.className = 'textInfoStyle';
    wordCountText.title = 'Word Count';
    wordCountText.textContent = '0 words';
    textInfoContainer.append(wordCountText);

    //-//

    let boldButton = ce('button');
    boldButton.textContent = 'B';
    boldButton.onclick = function()
    {
        document.execCommand('bold');
    };
    textInfoContainer.append(boldButton);

    //-//

    let italicButton = ce('button');
    italicButton.style.fontFamily = 'georgia';
    italicButton.textContent = 'I';
    italicButton.onclick = function()
    {
        document.execCommand('italic');
    };
    textInfoContainer.append(italicButton);

    //-//

    /*
    let fontFamilyInput = ce('input');
    fontFamilyInput.type = 'text';
    fontFamilyInput.id = 'fontFamilyInput';
    fontFamilyInput.value = 'Arial';
    fontFamilyInput.style.width = '50px';
    textInfoContainer.append(fontFamilyInput);

    //-//

    let setFontButton = ce('button');
    setFontButton.textContent = 'Set Font';
    setFontButton.onclick = function()
    {
        // instantly changes the font for the entire editor
        ge('theTextbox').style.fontFamily = fontFamilyInput.value;
    };
    textInfoContainer.append(setFontButton);
    */

    //-//

    let fontDropdown = ce('select');
    fontDropdown.id = 'fontDropdown';
    fontDropdown.style.backgroundColor = 'rgb(0, 0, 0)';
    fontDropdown.style.color = 'rgb(255, 255, 255)';
    fontDropdown.style.height = '20px';
    
    // Add your font options
    let fonts = ['Arial', 'Georgia', 'Impact', 'Courier New', 'Times New Roman'];

    for (let i = 0; i < fonts.length; i++)
    {
        let option = ce('option');
        option.value = fonts[i];
        option.textContent = fonts[i];
        fontDropdown.append(option);
    }
    textInfoContainer.append(fontDropdown);

    //-//

    let setFontSelectionButton = ce('button');
    setFontSelectionButton.textContent = 'setFontSelection';

    /*
    // Intercept the mouse press before it can steal focus
    setFontSelectionButton.onmousedown = function(e)
    {
        e.preventDefault(); 
    };

    setFontSelectionButton.onclick = function()
    {
        clickSound();
        // Because we prevented default on mousedown, the text is still highlighted
        document.execCommand('fontName', false, fontDropdown.value);
    };
    textInfoContainer.append(setFontSelectionButton);
    */

    ge('fontDropdown').onchange = function()
    {
        document.execCommand('fontName', false, fontDropdown.value);
    };

    //-//

    let nameOfFileInput = ce('input');
    nameOfFileInput.type = 'text';
    nameOfFileInput.id = 'nameOfFileInput';
    nameOfFileInput.value = 'ourTextFile';
    mainDiv.append(nameOfFileInput);

    //-//

    let newTextFileButton = ce('button');
    newTextFileButton.textContent = 'New';
    newTextFileButton.onmouseover = function()
    {
        hoverSound();
    };
    newTextFileButton.onclick = function()
    {
        clickSound();

        let askFirst = confirm("New File and Clear Text?");

        if (askFirst == true)
        {
            ge('theTextbox').innerHTML = '';
            ge('characterCountText').textContent = '0 chars';

            ge('wordCountText').textContent = '0 words';
        }
    };
    mainDiv.append(newTextFileButton);

    //-//

    let saveButton = ce('button');
    saveButton.textContent = 'Save';
    saveButton.onmouseover = function()
    {
        hoverSound();
    };
    saveButton.onclick = function()
    {
        clickSound();
        download('theTextbox');
    };
    mainDiv.append(saveButton);

    //-//

    let openButton = ce('input');
    openButton.type = 'file';
    // only accept .txt files
    openButton.accept = '.txt, .html, .js, .py, .css, .c, .cpp, .rb, .bat, .md';
    // handle file selection
    openButton.style.display = 'none';
    openButton.onchange = function(event)
    {
        // get the selected file
        let file = event.target.files[0];

        if (file)
        {
            let reader = new FileReader();

            // when the file is loaded, display content in textarea
            reader.onload = function(e)
            {
                // set file content to the textarea
                theTextbox.textContent = e.target.result;

                ge('characterCountText').textContent = getCharCount('theTextbox') + ' chars';

                ge('wordCountText').textContent = getWordCount('theTextbox') + ' words';
            };

            // read the file as text
            reader.readAsText(file);
        }
    };
    mainDiv.append(openButton);

    //-//

    let openFileBtn = ce('button');
    openFileBtn.textContent = 'Open';
    openFileBtn.onclick = function()
    {
        openButton.click();
    };
    mainDiv.append(openFileBtn);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let theTextbox = ce('div');
    theTextbox.id = 'theTextbox';
    theTextbox.contentEditable = true;
    theTextbox.style.border = 'solid 1px cyan';
    theTextbox.style.borderRadius = '8px';
    theTextbox.style.padding = '10px';
    theTextbox.style.minHeight = '300px';
    theTextbox.style.backgroundColor = 'black';
    theTextbox.style.color = 'white';
    theTextbox.style.outline = 'none';
    theTextbox.style.overFlow = 'scroll';
    //theTextbox.style.fontFamily = fontFamilyInput.value;
    theTextbox.onkeyup = function()
    {
        ge('characterCountText').textContent = getCharCount(theTextbox.id) + ' chars';

        ge('charCountWithSpacesText').textContent = getCharCountWithSpaces(theTextbox.id) + ' chars';

        ge('wordCountText').textContent = getWordCount(theTextbox.id) + ' words';

        // for fontFamily selected word
        saveSelection();
    };

    // for fontFamily selected word
    theTextbox.onmouseup = saveSelection;

    mainDiv.append(theTextbox);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

