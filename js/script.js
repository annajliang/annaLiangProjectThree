// ------ NAME SPACE OBJECT ------ //
// where all functions (methods) and variables (properties) will be stored
const soundboardApp = {};

// ------ VARIABLES ------ //
// variable stored as a property on the soundboardApp object that contains an object with two nested objects, each storing the properties and values that are to be referenced more than once in the soundboard.soundInfo array
soundboardApp.repeatedSoundInfo = {
    lemonOfTroy: {
        wikiUrl: "https://en.wikipedia.org/wiki/Lemon_of_Troy",
        youtubeUrl: "https://www.youtube.com/embed/Q8czEwlarps",
        episodeName: "Lemon of Troy",
        seasonNum: 6,
        episodeNum: 24,
    },
    lisasDateWithDensity: {
        wikiUrl: "https://en.wikipedia.org/wiki/Lisa%27s_Date_with_Density",
        youtubeUrl: "https://www.youtube.com/embed/0MmwIwwoqQI",
        episodeName: "Lisa's Date with Density",
        seasonNum: 8,
        episodeNum: 7,
    },
};

// variable stored as a property on the soundboardApp object that contains an array of objects that stores additional information regarding the audio files
soundboardApp.soundInfo = [
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Burns%27_Heir",
        youtubeUrl: "https://www.youtube.com/embed/XamT18me0Yo",
        episodeName: "Burns' Heir",
        seasonNum: 5,
        episodeNum: 18,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Homerpalooza",
        youtubeUrl: "https://www.youtube.com/embed/qaCV4VBazzA",
        episodeName: "Homerpalooza",
        seasonNum: 7,
        episodeNum: 24,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Marge_Be_Not_Proud",
        youtubeUrl: "https://www.youtube.com/embed/GBft7AWrzuc",
        episodeName: "Marge Be Not Proud",
        seasonNum: 7,
        episodeNum: 11,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Lisa%27s_Sax",
        youtubeUrl: "https://www.youtube.com/embed/eFyavcnum6I",
        episodeName: "Lisa's Sax",
        seasonNum: 9,
        episodeNum: 3,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Bart_Sells_His_Soul",
        youtubeUrl: "https://www.youtube.com/embed/_VhhMUs0zc8",
        episodeName: "Bart Sells His Soul",
        seasonNum: 7,
        episodeNum: 4,
    },
    { ...soundboardApp.repeatedSoundInfo.lemonOfTroy },
    { ...soundboardApp.repeatedSoundInfo.lisasDateWithDensity },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Brother_from_the_Same_Planet",
        youtubeUrl: "https://www.youtube.com/embed/Lo4NHVP3uww",
        episodeName: "Brother from the Same Planet",
        seasonNum: 4,
        episodeNum: 14,
    },
    { ...soundboardApp.repeatedSoundInfo.lemonOfTroy },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/The_Canine_Mutiny",
        youtubeUrl: "https://www.youtube.com/embed/RDwGnGAGYjU",
        episodeName: "The Canine Mutiny",
        seasonNum: 8,
        episodeNum: 20,
    },
    { ...soundboardApp.repeatedSoundInfo.lemonOfTroy },
    { ...soundboardApp.repeatedSoundInfo.lisasDateWithDensity },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Mom_and_Pop_Art",
        youtubeUrl: "https://www.youtube.com/embed/W9hA3O0iPQw",
        episodeName: "Mom and Pop Art",
        seasonNum: 10,
        episodeNum: 19,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Team_Homer",
        youtubeUrl: "https://www.youtube.com/embed/Ycmgn9R3Abw",
        episodeName: "Team Homer",
        seasonNum: 7,
        episodeNum: 12,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Days_of_Future_Future",
        youtubeUrl: "https://www.youtube.com/embed/DPBMJrd0O4A",
        episodeName: "Days of Future Future",
        seasonNum: 25,
        episodeNum: 18,
    },
    {
        wikiUrl: "https://en.wikipedia.org/wiki/Sideshow_Bob%27s_Last_Gleaming",
        youtubeUrl: "https://www.youtube.com/embed/mv3zXeYDrBs",
        episodeName: "Sideshow Bob's Last Gleaming",
        seasonNum: 7,
        episodeNum: 9,
    },
];

// ------ FUNCTIONS ------ //
// function that controls the smooth scroll animation on the entire HTML and body element and stops up until it reaches the desired element
soundboardApp.scroll = function (scrollTo) {
    $("html, body").animate({
        scrollTop: $(scrollTo).offset().top
    }, 800);
};

// attach event listener onto the arrow down icon and parent div when it is clicked, the scroll function executes and the page will scroll to the main element
soundboardApp.scrollToMain = function () {
    $(".headerStart, .startIcon").on("click", function (e) {
        e.preventDefault();
        soundboardApp.scroll("main");
    });
};

// function that disables the sound from being played when any "i" elements or elements with a class of ".buttonResponsive " are clicked
soundboardApp.disableSound = function () {
    $("i, .buttonResponsive").click(function () {
        $(this).prop("disabled", true);
        return false;
    });
};

// function that takes one parameter and passes each object that was looped through from soundboardApp.showInfoAlert as an argument in order get the values from soundboardApp.soundInfo to later be displayed onto the alert when called
soundboardApp.getSoundInfoAlertProperties = function (soundInfoProperties) {
    // object is stored and then returned when it is called
    return {
        icon: "info",
        html: `       <p>This audio is from:</p>
                            <a href="${soundInfoProperties.wikiUrl}" title="Wikipedia page of The Simpsons episode from where the sound clip originated from">${soundInfoProperties.episodeName}
                            (Season ${soundInfoProperties.seasonNum}, Episode ${soundInfoProperties.episodeNum})</a>
                            <iframe width="100%" height="300" class="marginTop" src="${soundInfoProperties.youtubeUrl}" frameborder="0" allowfullscreen title="YouTube embedded video of The Simpsons episode from where the sound clip originated from"></iframe>
                    `,
        showCloseButton: true,
    };
};

// function that fires the alert and displays/adds the appropriate sound info to the DOM on a click or keyup event which the corresponding info icon is listening for
soundboardApp.showSoundInfoAlert = function () {
    $(soundboardApp.soundInfo).each(function (i, soundInfoObject) {
        // uses the index of each soundInfoObject to listen for a click or keyup event on each corresponding icon
        $(`.icon${i + 1}`).on("click keyup", function (e) {
            // ternary operator that checks if the event was a click or an 'enter' key
            (e.type === "click" || e.key === "Enter")
                // if true, each object from soundInfoObject gets passed as an argument to the parameter of soundboardApp.getInfoAlertOptions and the object on line 134 - 144 is then returned when called
                //alert popup with the corresponding sound info is ready to be displayed on the page when Swal.fire is called
                ? Swal.fire(soundboardApp.getSoundInfoAlertProperties(soundInfoObject))
                // if false, nothing happens
                : null;
        });
    });
};

// function that shows the focus outline on "button" and "a" elements when the tab key is pressed
soundboardApp.showFocusOutline = function () {
    $("body").on("keyup", function (e) {
        if (e.key === "Tab") {
            $(this).removeClass("noFocusOutline");
        }
    });
};

// function that allows users who have difficulty using a mouse to view the back of the button by pressing the enter key instead of having to hover over with a mouse when the soundboardApp is on desktop/laptop screens
soundboardApp.toggleButtonFlip = function () {
    soundboardApp.$buttons.keypress("enter", function () {
        if ($(window).width() > 1024) {
            $(this).children(".buttonSide").toggleClass("buttonSideBack");
        }
    })
}

// function that removes the current filter from the button when the sound has ended
soundboardApp.removeCurrentFilter = function () {
    soundboardApp.$sounds.on("ended", function () {
        soundboardApp.$buttons.children(".buttonSide").removeClass("filter");
    });
};

// function that listens for a click on each button and toggles the corresponding sound on and off depending on whether the sound is paused or not
// filter is also added when the sound is being played and removed when sound is paused on only the children elements with a class name of .buttonSide of the parent element
soundboardApp.toggleSoundAndFilter = function () {
    soundboardApp.$buttons.each(function (i, button) {
        $(button).on("click", function () {
            if (soundboardApp.$sounds[i].paused) {
                soundboardApp.$sounds[i].play();
                $(button).children(".buttonSide").toggleClass("filter");
            } else {
                soundboardApp.$sounds[i].pause();
                $(button).children(".buttonSide").toggleClass("filter");
            }
        });
    });
    // function is called and filter is removed after each sound has ended
    soundboardApp.removeCurrentFilter();
};

// function that only allows for one filter to be applied at a time on a click event
// removes any previous filters except the current one
soundboardApp.removeExtraFilters = function () {
    soundboardApp.$buttons.on("click", function () {
        soundboardApp.$buttons.not($(this)).each(function (i, button) {
            $(button).children(".buttonSide").removeClass("filter");
        });
    });
};

// function that only allows for only one sound to be played at a time on a play event
// removes any previous sounds except the current one
soundboardApp.removeExtraSounds = function () {
    soundboardApp.$sounds.on("play", function () {
        soundboardApp.$sounds.not($(this)).each(function (i, sound) {
            sound.currentTime = 0;
            sound.pause();
            //additional filters are also removed when additional sounds are removed
            soundboardApp.removeExtraFilters();
        });
    });
};

// function that will execute all the functions when called
soundboardApp.init = function () {
    // ------ CACHED JQUERY SELECTORS ------ //
    // variable stored as a property on the soundboardApp object that contains an array of all audio elements selected from the DOM
    soundboardApp.$sounds = $("audio");
    // variable stored as a property on the soundboardApp object that contains an array of all elements with a class of .buttonItem selected from the DOM
    soundboardApp.$buttons = $(".buttonItem");
    soundboardApp.scrollToMain();
    soundboardApp.disableSound();
    soundboardApp.showSoundInfoAlert();
    soundboardApp.showFocusOutline();
    soundboardApp.toggleButtonFlip();
    soundboardApp.toggleSoundAndFilter();
    soundboardApp.removeExtraSounds();
};

// ------ DOCUMENT READY ------ //
$(function () {
    // soundboardApp is called when document is ready
    soundboardApp.init();
});
