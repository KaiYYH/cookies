import introductionStory from '../shared/objects/introduction.js';

let introductionStoryDiv = document.createElement('div');
introductionStoryDiv.id = 'introduction';
document.body.appendChild(introductionStoryDiv);

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

// Generating Functions 
function generateIntroText() {
    let storyLine = document.createElement('p');
    storyLine.innerText = introductionStory[0].description;
    storyLine.className = 'introductionStory';
    document.getElementById('introduction').append(storyLine);
    order.shift();
    introductionStory.shift();
}

function generateHouse() {
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
}

function generateColours() {
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
}

function generatePaint() {
    let paintButtonsDiv = document.createElement('div');
    paintButtonsDiv.id = 'paintButton';
    document.getElementById('introduction').appendChild(paintButtonsDiv);

    let paintButton = document.createElement('button');
    paintButton.innerText = 'paint';
    document.getElementById('paintButton').appendChild(paintButton);
}

function generateBake() {
    let bakeButtonsDiv = document.createElement('div');
    bakeButtonsDiv.id = 'bakeButton';
    document.getElementById('introduction').appendChild(bakeButtonsDiv);

    let bakeButton = document.createElement('button');
    bakeButton.innerText = 'bake a cookie';
    document.getElementById('bakeButton').appendChild(bakeButton);
}

generateIntroText();
generateHouse();
generateIntroText();
generateColours();
generatePaint();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateIntroText();
generateBake();