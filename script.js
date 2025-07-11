const app = document.getElementById('app');

function createInputArea() {
  const container = document.createElement('div');
  
  const textarea = document.createElement('textarea');
  textarea.placeholder = "Share your thought...";
  
  const button = document.createElement('button');
  button.textContent = "Add to EchoMind";
  
  button.addEventListener('click', () => {
    if (textarea.value.trim()) {
      addThought(textarea.value);
      textarea.value = '';
    }
  });
  
  container.appendChild(textarea);
  container.appendChild(button);
  app.appendChild(container);
}

function addThought(thought) {
  // For now, just display the thought
  const thoughtDiv = document.createElement('div');
  thoughtDiv.className = 'thought';
  thoughtDiv.textContent = thought;
  app.appendChild(thoughtDiv);
}

// Initialize
createInputArea();
