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

    function checkAnswer(selectedEmoji) {
        if (isChecking) return; // Don't do anything if already checking
        isChecking = true;

        const correctEmoji = gameData[currentWordIndex].emoji;

        if (selectedEmoji === correctEmoji) {
            // Correct answer
            feedbackText.textContent = '👍 כל הכבוד!';
            feedbackText.className = 'correct feedback-animation';

            setTimeout(() => {
                currentWordIndex++;
                if (currentWordIndex >= gameData.length) {
                    // Game finished
                    wordElement.textContent = 'סיימת את המשחק!';
                    document.getElementById('options-container').style.display = 'none';
                    feedbackText.textContent = '🎉 כל הכבוד!';
                } else {
                    loadNewWord();
                }
            }, 1500); // Wait 1.5 seconds before loading next word
        } else {
            // Incorrect answer
            feedbackText.textContent = '😟 נסה שוב';
            feedbackText.className = 'incorrect feedback-animation';

            // Allow trying again after a short delay
            setTimeout(() => {
                feedbackText.textContent = '';
                isChecking = false;
            }, 1000);
        }
    }

    // --- Event Listeners ---

    startGameBtn.addEventListener('click', startGame);

    optionElements.forEach(el => {
        el.addEventListener('click', (e) => {
            checkAnswer(e.target.dataset.emoji);
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