const phrases = ["Real-time Artificial Threat Observation Response", "RAPTOR", "Announcements comming soon..."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 75; // Speed when typing
const deletingSpeed = 45; // Speed when deleting
const delayAfterPhrase = 1750; // Delay after finishing a phrase
const delayAfterDeleting = 550; // Delay after deleting before starting next phrase
const animatedText = document.getElementById('animatedText');

function type() {
    const fullText = phrases[currentPhraseIndex];
    if (isDeleting) {
        // Deleting characters
        currentCharIndex--;
    } else {
        // Typing characters
        currentCharIndex++;
    }

    animatedText.textContent = fullText.substring(0, currentCharIndex);

    let typingDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === fullText.length) {
        // Finished typing the phrase, pause before starting to delete
        typingDelay = delayAfterPhrase;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        // Finished deleting, pause before starting to type the next phrase
        typingDelay = delayAfterDeleting;
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    setTimeout(type, typingDelay);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});
