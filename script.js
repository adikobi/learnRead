document.addEventListener('DOMContentLoaded', () => {
    // Game data: Word with nikkud and corresponding emoji
    const gameData = [
        { word: 'בַּנָּנָה', emoji: '🍌' },
        { word: 'תַּפּוּחַ', emoji: '🍎' },
        { word: 'כֶּלֶב', emoji: '🐶' },
        { word: 'חָתוּל', emoji: '🐱' },
        { word: 'פִּיל', emoji: '🐘' },
        { word: 'אַרְיֵה', emoji: '🦁' },
        { word: 'מְכוֹנִית', emoji: '🚗' },
        { word: 'בַּיִת', emoji: '🏠' },
        { word: 'שֶׁמֶשׁ', emoji: '☀️' },
        { word: 'כּוֹכָב', emoji: '⭐' }
    ];

    // DOM Elements
    const splashScreen = document.getElementById('splash-screen');
    const gameScreen = document.getElementById('game-screen');
    const startGameBtn = document.getElementById('start-game-btn');
    const wordElement = document.getElementById('word');
    const optionElements = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3')
    ];
    const feedbackText = document.getElementById('feedback-text');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const shootConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true,
    });

    let currentWordIndex = 0;
    let isChecking = false; // Prevents multiple clicks while checking answer

    // --- Game Logic ---

    function startGame() {
        splashScreen.classList.remove('active');
        gameScreen.classList.add('active');
        loadNewWord();
    }

    function loadNewWord() {
        isChecking = false;
        feedbackText.textContent = '';
        feedbackText.className = '';

        // Get the current word object
        const currentWord = gameData[currentWordIndex];
        wordElement.textContent = currentWord.word;

        // Get two other random emojis for incorrect options
        let incorrectOptions = [];
        while (incorrectOptions.length < 2) {
            const randomIndex = Math.floor(Math.random() * gameData.length);
            const randomEmoji = gameData[randomIndex].emoji;
            if (randomEmoji !== currentWord.emoji && !incorrectOptions.includes(randomEmoji)) {
                incorrectOptions.push(randomEmoji);
            }
        }

        // Create the options array and shuffle it
        const options = [currentWord.emoji, ...incorrectOptions];
        shuffleArray(options);

        // Display the options
        optionElements.forEach((el, index) => {
            el.textContent = options[index];
            el.dataset.emoji = options[index]; // Store emoji in data attribute
        });
    }

    function checkAnswer(selectedElement) {
        if (isChecking) return; // Don't do anything if already checking
        isChecking = true;

        const selectedEmoji = selectedElement.dataset.emoji;
        const correctEmoji = gameData[currentWordIndex].emoji;

        if (selectedEmoji === correctEmoji) {
            // Correct answer
            feedbackText.textContent = '👍 כל הכבוד!';
            feedbackText.className = 'correct feedback-animation';
            shootConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                currentWordIndex++;
                if (currentWordIndex >= gameData.length) {
                    // Game finished
                    wordElement.textContent = 'סיימת את המשחק!';
                    document.getElementById('options-container').style.display = 'none';
                    feedbackText.textContent = '🎉 כל הכבוד!';
                    shootConfetti({ particleCount: 200, spread: 120 });
                } else {
                    loadNewWord();
                }
            }, 2000); // Wait 2 seconds before loading next word
        } else {
            // Incorrect answer
            selectedElement.classList.add('shake');
            feedbackText.textContent = '😟 נסה שוב';
            feedbackText.className = 'incorrect feedback-animation';

            // Allow trying again after the animation
            setTimeout(() => {
                selectedElement.classList.remove('shake');
                feedbackText.textContent = '';
                isChecking = false;
            }, 800);
        }
    }

    // --- Event Listeners ---

    startGameBtn.addEventListener('click', startGame);

    optionElements.forEach(el => {
        el.addEventListener('click', (e) => {
            checkAnswer(e.target); // Pass the element itself
        });
    });

    // --- Utility Functions ---

    /* Fisher-Yates shuffle algorithm */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});