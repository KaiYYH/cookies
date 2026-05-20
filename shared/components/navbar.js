/*
navbar setup:
- current status
- pages
*/

import pages from "../objects/pages.js";

let navbarDiv = document.getElementById('navbar');

let statusDiv = document.createElement('div');
statusDiv.id = 'status-div';
navbarDiv.appendChild(statusDiv);

let statusText = document.createElement('p');
statusText.innerText = 'STATUS: Go through the intro!';
statusDiv.appendChild(statusText);

let pagesDiv = document.createElement('div');
pagesDiv.id = 'pages-div';
pagesDiv.classList.add('flex-div');
navbarDiv.appendChild(pagesDiv);

for (let pageObject of pages) {
    let page = document.createElement('a');
    page.classList.add('nav-div');
    page.setAttribute('href', pageObject.path);
    page.innerText = pageObject.name;
    pagesDiv.appendChild(page);
}