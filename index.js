// index.js

// Adds an element with given id and content to the DOM
function addElementToDOM(id, content) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
  }
  el.textContent = content;
}

// Removes an element with the given id from the DOM
function removeElementFromDOM(id) {
  const el = document.getElementById(id);
  if (el) {
    el.remove();
  }
}

// Simulates a button click to update content of a DOM element
function simulateClick(id, content) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => {
    el.textContent = content;
  });

  // Trigger click programmatically
  el.click();
}

// Handles form submission and updates the DOM element
function handleFormSubmit(formId, displayId) {
  const form = document.getElementById(formId);
  const display = document.getElementById(displayId);
  const errorMessage = document.getElementById('error-message');

  if (!form || !display || !errorMessage) return;

  const input = form.querySelector('input');
  if (!input) return;

  if (!input.value) {
    errorMessage.textContent = 'Input cannot be empty';
    errorMessage.classList.remove('hidden');
    return;
  }

  // Clear any previous error
  errorMessage.textContent = '';
  errorMessage.classList.add('hidden');

  // Update display with input value
  display.textContent = input.value;

  // Optionally, clear input
  input.value = '';
}

// Export functions for Jest testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
