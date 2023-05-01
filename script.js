// Get references to the start session button and session list
const startSessionBtn = document.getElementById('startSessionBtn');
const sessionList = document.getElementById('sessionList');
const sessionContainer = document.querySelector('.session')

// Define the function to start a new session
function startSession() {
  // Generate a random session ID and counter value
  const sessionId = Math.floor(Math.random() * 100000);
  const counterValue = Math.floor(Math.random() * 91) + 30; // Random value between 30 and 120

  // Display the session ID and counter value
  console.log(`Starting session ${sessionId} with counter value ${counterValue}`);
  

  // Create a new session object with the current time and end time
  const startTime = new Date();
  const endTime = new Date(startTime.getTime() + counterValue * 1000);
  const session = { sessionId, startTime, endTime };

  // Add the session to the session list
  const sessionItem = document.createElement('li');
  sessionItem.className = 'sessionItem';
  sessionItem.innerHTML = `<span>Session ID:</span>${session.sessionId}<br><span>Start Time:</span>${session.startTime.toLocaleString()}<br><span>End Time:</span>${session.endTime.toLocaleString()}`;
  sessionList.appendChild(sessionItem);

  // Start the countdown timer
  const countdownTimer = setInterval(() => {
    // Calculate the remaining time
    const remainingTime = Math.round((endTime.getTime() - new Date().getTime()) / 1000);

    // Display the remaining time
    console.log(`Session ${sessionId} remaining time: ${remainingTime} seconds`);
    sessionContainer.innerHTML=`<p class="sessiontime">Session ${sessionId} remaining time: ${remainingTime} seconds</p>`

    // If the time has run out, stop the timer and store the session in the session history
    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      console.log(`Session ${sessionId} has ended`);
      sessionContainer.innerHTML=`<p class="sessionEnd">Session ${sessionId} has ended</p>`
    }
  }, 1000);
}

// Add a click event listener to the start session button
startSessionBtn.addEventListener('click', startSession);
