document.addEventListener("DOMContentLoaded", function() {
    // Open/Close Chat Box
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const closeChatButton = document.getElementById("close-chat");

    chatButton.addEventListener("click", () => {
        chatBox.style.display = chatBox.style.display === "none" || chatBox.style.display === "" ? "block" : "none";
    });

    closeChatButton.addEventListener("click", () => {
        chatBox.style.display = "none";
    });

    // Handle sending messages
    const sendMessageButton = document.getElementById("send-message");
    const userInput = document.getElementById("user-input");
    const chatContent = document.querySelector(".chat-content");

    sendMessageButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            // Append user message to chat content
            const userMessageElement = document.createElement("div");
            userMessageElement.classList.add("message", "user-message");
            userMessageElement.innerHTML = `<p>${userMessage}</p>`;
            chatContent.appendChild(userMessageElement);

            // Clear the input field
            userInput.value = "";

            // Simulate bot response (you can replace this with actual chat logic)
            setTimeout(() => {
                const botMessageElement = document.createElement("div");
                botMessageElement.classList.add("message", "bot-message");
                botMessageElement.innerHTML = `<p>Bot: Bạn vừa hỏi: ${userMessage}</p>`;
                chatContent.appendChild(botMessageElement);

                // Scroll to the bottom of the chat content
                chatContent.scrollTop = chatContent.scrollHeight;
            }, 1000);
        }
    });
});
