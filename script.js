const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

messageForm.addEventListener('submit', sendMessage);

function sendMessage(event) {
  event.preventDefault();
  
  const message = messageInput.value;

  // Send the message to the server
  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
    .then(response => response.json())
    .then(data => {
      // Append the new message to the container
      const newMessage = document.createElement('div');
      newMessage.innerText = data.message;
      messageContainer.appendChild(newMessage);
      
      // Clear the input field
      messageInput.value = '';
    });
}
