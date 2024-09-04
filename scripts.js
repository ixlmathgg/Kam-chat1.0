document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('p');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
