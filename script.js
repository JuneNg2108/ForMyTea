// JavaScript (script.js)

// Function to handle redirection - seems not used so it can be removed if not needed elsewhere
function redirectToCard() {
  document.getElementById("invitation-screen").style.display = "none";
  document.getElementById("card").style.display = "block";
}

// Function to update message based on user input - can be removed if not used
function updateMessage() {
  var userInput = document.getElementById("userInput").value;
  document.getElementById("customMessage").innerText = userInput;
}

document.addEventListener("DOMContentLoaded", function() {
  var messages = [
    "Em bé ơiiiii <33",
    "Hôm nay là ngày Valentine 14-2 đóooooo ><",
    "Gửi tới em bông hoa đẹp nhất hôm nay <33",
    "Em là miếng socola ngọt ngào nhất mà a từng biết",
    "Là người con gái đáng yêu nhất mà a từng gặp",
    "A muốn nói với em rằng a yêu em nhiều lắm",
    " Ở bên a nhé, em bé của a <33",
    "a"
  ];
  

  var messageIndex = 0; // Initialize message index
  var messageElement = document.getElementById("customMessage"); // Message display element
  var isOpen = false; // Initial state of the card

  // Function to toggle the open/close state of the hearts and update message
  function toggleHeartsAndMessage() {
    // Toggle the state
    isOpen = !isOpen;

    // Update class list based on the current state
    document.getElementById("heart1").classList.toggle('animateOpenLeft', isOpen);
    document.getElementById("heart1").classList.toggle('animateCloseLeft', !isOpen);
    document.getElementById("heart2").classList.toggle('animateOpenRight', isOpen);
    document.getElementById("heart2").classList.toggle('animateCloseRight', !isOpen);

    // Update the message only if closing the card
    if (!isOpen) {
      messageIndex = (messageIndex + 1) % messages.length;
      messageElement.textContent = messages[messageIndex];

      // Redirect if the last message is shown
      if (messages[messageIndex] === "a") {
        window.location.href = 'ending.html'; // Redirects to ending.html
      }
    }
  }

  // Event listener for card click
  document.getElementById('card').addEventListener('click', toggleHeartsAndMessage);

  // Attempt to play background music
  var backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play().catch(function(e) {
    console.error("Audio play failed:", e);
  });
});

// Check if music should be playing
const shouldPlayMusic = localStorage.getItem('playMusic') === 'true';

if (shouldPlayMusic) {
  var backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play().catch(function(e) {
    console.error("Audio play failed:", e);
  });
}

document.getElementById('card').addEventListener('click', function() {
  // Save the state indicating music should continue playing
  localStorage.setItem('playMusic', 'true');
});
