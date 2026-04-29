/*
navbar setup:
- current status
- pages
*/

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

let page1 = document.createElement('a');
page1.classList.add('nav-div');
page1.setAttribute('href', '/');
page1.innerText = 'The Forge';
pagesDiv.appendChild(page1);

let page2 = document.createElement('a');
page2.classList.add('nav-div');
page2.setAttribute('href', '/');
page2.innerText = 'The Swamp';
pagesDiv.appendChild(page2);

let page3 = document.createElement('a');
page3.classList.add('nav-div');
page3.setAttribute('href', '/');
page3.innerText = 'The Festival';
pagesDiv.appendChild(page3);