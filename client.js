// client.js

const socket = io(); // Connect to the server

socket.on('message', displayMessage);

document.getElementById('sendButton').addEventListener('click', () => {
    sendMessage();
});

document.getElementById('textInput').addEventListener('keypress', (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('textInput');
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('message', message);
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
}

function displayMessage(message) {
    const displayArea = document.getElementById('displayArea');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    displayArea.appendChild(messageElement);
}