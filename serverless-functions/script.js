
async function generateButtons() {

  const randomNumberOfButtons = Math.floor(Math.random() * 10) + 1;
    // Call the function endpoint
    const response = await fetch('/.netlify/functions/generateButtons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numberOfButtons: randomNumberOfButtons }), 
    });

    const data = await response.json();
  
    // Render buttons 
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = '';
  
    // Iterate and create new button elements
    data.buttons.forEach((buttonNumber) => {
      const newButton = document.createElement('button');
      newButton.textContent = `Button ${buttonNumber}`;
      buttonContainer.appendChild(newButton);
    });
  }
  
  //click event listener to the button
  document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateButtons);
  });
  