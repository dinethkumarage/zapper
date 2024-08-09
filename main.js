document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

    // Your existing JavaScript code goes here
});


// Existing code...

// AI Chat functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(message) {
    // This is a mock AI response. In a real application, you would call an API here.
    const responses = [
        "That's an interesting question! I'd be happy to help you with that.",
        "Great question! Let me find some information for you.",
        "I'm processing your request. Give me a moment to gather the best answer.",
        "Thanks for asking! Here's what I know about that topic...",
        "I'm always excited to learn new things. Let me research that for you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';

        // Simulate AI thinking
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            addMessage(aiResponse);
        }, 1000);
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Add an initial AI message
addMessage("Hello! I'm your AI assistant. How can I help you today?");