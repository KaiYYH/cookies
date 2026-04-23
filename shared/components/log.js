import userLogs from '../objects/userLogs.js';

let logTitleDiv = document.createElement('div');
logTitleDiv.className = 'heading';
logTitleDiv.id = 'logTitleDiv';
document.getElementById('log').appendChild(logTitleDiv);

let logTitle = document.createElement('h3');
logTitle.innerText = 'LOG';
logTitle.className = 'heading';
document.getElementById('logTitleDiv').appendChild(logTitle);

let userLog = document.createElement('div');
userLog.id = 'userLog';
document.getElementById('log').appendChild(userLog);

for (let log of userLogs) {
    let logEntry = document.createElement('p');
    logEntry.innerText = log.description;
    logEntry.className = 'logEntry';
    document.getElementById('userLog').prepend(logEntry);
}