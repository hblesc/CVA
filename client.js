// client.js
const socket = io(); // Connect to the server

socket.on('message', (data) => {
    displayMessage(data);
});

function sendMessage(message) {
    socket.emit('message', message);
}

function displayMessage(message) {
    const displayArea = document.getElementById('displayArea');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    displayArea.appendChild(messageElement);
}

function displayText() {
    const newText = document.getElementById("textInput").value;

    if (!newText.trim()) {
        alert("Please enter a message.");
        return;
    }

    sendMessage(newText);
    document.getElementById("textInput").value = "";
}
