/* Ideas

- people stealing cookies so you defend it or hires defense people
- people asking for cookies
- people donating cookies
- cookies falling from the sky
- small fire from oven
- feed small animals
- main game stuff goes here too

*/

import userLogs from '../fridge/userLogs';

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

for (log in userLogs) {
    console.log(log);
    let logEntry = document.createElement('p');
    logEntry.innerText = log;
    logEntry.className = 'logEntry';
    document.getElementById('userLog').appendChild(logEntry);
}