import introductionStory from '../shared/objects/introduction.js';

let introductionStoryDiv = document.createElement('div');
introductionStoryDiv.id = 'introduction';
document.body.appendChild(introductionStoryDiv);

// MAKE INTO FUNCTIONS vvvvvvvvvvvvvvvvv


// house creation
let houseDiv = document.createElement('div');
houseDiv.id = 'house';
document.getElementById('introduction').appendChild(houseDiv);

let houseGridDiv = document.createElement('div');
houseGridDiv.id = 'houseDiv';
document.getElementById('house').appendChild(houseGridDiv);

for (let i = 0; i < 9; i++) {
    let houseGrid = document.createElement('div');
    houseGrid.className = 'houseGrid';
    document.getElementById('houseDiv').appendChild(houseGrid)
}


// colour selection buttons    [fire engine red\] \n \[highlighter yellow\] \n \[traffic cone orange\]"
let buttons = [
    {
        colour: "fire engine red",
        code: "#d60e00",
    },
    {
        colour: "highlighter yellow",
        code: "#ffee00",
    },
    {
        colour: "traffic cone orange",
        code: "#ff6600",
    },
]

let colourButtonsDiv = document.createElement('div');
colourButtonsDiv.id = 'colourButtons';
document.getElementById('introduction').appendChild(colourButtonsDiv);

for (let button of buttons) {
    let colourButton = document.createElement('button');
    colourButton.className = 'colourButton';
    colourButton.innerText = button.colour;
    document.getElementById('colourButtons').appendChild(colourButton);
}

// paint button
let paintButtonsDiv = document.createElement('div');
paintButtonsDiv.id = 'paintButton';
document.getElementById('introduction').appendChild(paintButtonsDiv);

let paintButton = document.createElement('button');
paintButton.innerText = 'paint';
document.getElementById('paintButton').appendChild(paintButton);

// bake button
let bakeButtonsDiv = document.createElement('div');
bakeButtonsDiv.id = 'bakeButton';
document.getElementById('introduction').appendChild(bakeButtonsDiv);

let bakeButton = document.createElement('button');
bakeButton.innerText = 'bake a cookie';
document.getElementById('bakeButton').appendChild(bakeButton);


// text elements
for (let story of introductionStory) {
    let storyLine = document.createElement('p');
    storyLine.innerText = story.description;
    storyLine.className = 'introductionStory';
    document.getElementById('introduction').append(storyLine);
}

// MAKE INTO FUNCTIONS ^^^^^^^^^^^^^^^^

const step = Object.freeze({
    text: 'text',
    house: 'house',
    colours: 'colours',
    paint: 'paint',
    bake: 'bake'
});

let order = [
    step.text, 
    step.house, 
    step.text, 
    step.colours, 
    step.paint, 
    step.text, 
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.text,
    step.bake,
];