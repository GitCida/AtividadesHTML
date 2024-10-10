const input = document.getElementById('inputText');
const display = document.getElementById('displayText');

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        display.textContent = input.value;
        input.value = '';
    }
});
