// whenLoaded.js

function whenLoaded()
{
    makeWorld();

    makeLocationTextbox();

    menuOfFunctions();

    menuResolution(locations);

    menuLocations(locations);

    makeLocationMarker();

    makeTitleOfApp();

    loadSounds(sounds);

    setTimeout(function()
    {
        scrollToLocation('5');
    }, 1000);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

