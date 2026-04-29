/*
Things you can have:
-> cookies
-> ingredients
-> baked cookies
*/

// Main inventory setup

let inventoryTitleDiv = document.createElement('div');
inventoryTitleDiv.className = 'heading';
inventoryTitleDiv.id = 'inventoryTitleDiv';
document.getElementById('inventory').appendChild(inventoryTitleDiv);

let inventoryTitle = document.createElement('h3');
inventoryTitle.innerText = 'INVENTORY';
inventoryTitle.className = 'heading';
document.getElementById('inventoryTitleDiv').appendChild(inventoryTitle);

let inventorySection = document.createElement('div');
inventorySection.id = 'inventorySection';
inventorySection.className = 'flex-div';
document.getElementById('inventory').appendChild(inventorySection);

let cookiesSection = document.createElement('div');
cookiesSection.id = 'cookiesSection';
document.getElementById('inventorySection').appendChild(cookiesSection);

let cookieItem = document.createElement('div');
cookieItem.innerText = 'Cookies: 0';
cookieItem.className = 'cookieItem';
document.getElementById('cookiesSection').appendChild(cookieItem);

// Ingredients

let ingredientsSection = document.createElement('div');
ingredientsSection.id = 'ingredientsSection';
ingredientsSection.className = 'sub-div';
document.getElementById('inventorySection').appendChild(ingredientsSection);

let ingredientsHeader = document.createElement('div');
ingredientsHeader.id = 'ingredientsHeader';
document.getElementById('ingredientsSection').appendChild(ingredientsHeader);

let ingredientsHeading = document.createElement('div');
ingredientsHeading.innerText = 'Ingredients';
ingredientsHeading.className = 'inventorySectionHeading';
document.getElementById('ingredientsHeader').appendChild(ingredientsHeading);

let ingredientsList = document.createElement('div');
ingredientsList.id = 'ingredientsList';
document.getElementById('ingredientsSection').appendChild(ingredientsList);

let ingredientItem = document.createElement('div');
ingredientItem.innerText = 'Chocolate Chips: 0';
ingredientItem.className = 'ingredientItem';
document.getElementById('ingredientsList').appendChild(ingredientItem);

// Completed cookies

let completedSection = document.createElement('div');
completedSection.id = 'completedSection';
completedSection.className = 'sub-div';
document.getElementById('inventorySection').appendChild(completedSection);

let completedHeader = document.createElement('div');
completedHeader.id = 'completedHeader';
document.getElementById('completedSection').appendChild(completedHeader);

let completedHeading = document.createElement('div');
completedHeading.innerText = 'Completed Cookies';
completedHeading.className = 'inventorySectionHeading';
document.getElementById('completedHeader').appendChild(completedHeading);

let completedList = document.createElement('div');
completedList.id = 'completedList';
document.getElementById('completedSection').appendChild(completedList);

let completedCookie = document.createElement('div');
completedCookie.innerText = 'Chocolate Chip Cookies: 0';
completedCookie.className = 'completedCookie';
document.getElementById('completedList').appendChild(completedCookie);