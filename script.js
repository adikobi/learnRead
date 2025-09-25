document.addEventListener('DOMContentLoaded', () => {
    // Game data: Word with nikkud and corresponding emoji
    const gameData = [
        // Original 10
        { word: 'בַּנָּנָה', emoji: '🍌' }, { word: 'תַּפּוּחַ', emoji: '🍎' }, { word: 'כֶּלֶב', emoji: '🐶' },
        { word: 'חָתוּל', emoji: '🐱' }, { word: 'פִּיל', emoji: '🐘' }, { word: 'אַרְיֵה', emoji: '🦁' },
        { word: 'מְכוֹנִית', emoji: '🚗' }, { word: 'בַּיִת', emoji: '🏠' }, { word: 'שֶׁמֶשׁ', emoji: '☀️' },
        { word: 'כּוֹכָב', emoji: '⭐' },
        // Expansion 1 (15 words)
        { word: 'עוּגָה', emoji: '🎂' }, { word: 'פֶּרַח', emoji: '🌸' }, { word: 'דָּג', emoji: '🐠' },
        { word: 'כַּדּוּר', emoji: '⚽' }, { word: 'סֵפֶר', emoji: '📖' }, { word: 'מַטּוֹס', emoji: '✈️' },
        { word: 'גְּלִידָה', emoji: '🍦' }, { word: 'עֵץ', emoji: '🌳' }, { word: 'פִּטְרִיָּה', emoji: '🍄' },
        { word: 'פַּרְפַּר', emoji: '🦋' }, { word: 'צְפַרְדֵּעַ', emoji: '🐸' }, { word: 'דְּבוֹרָה', emoji: '🐝' },
        { word: 'פִּיצָה', emoji: '🍕' }, { word: 'רַכֶּבֶת', emoji: '🚆' }, { word: 'מִטְרִיָּה', emoji: '☔' },
        // Expansion 2 (25 words)
        { word: 'אֲבַטִּיחַ', emoji: '🍉' }, { word: 'תּוּת', emoji: '🍓' }, { word: 'עַגְבָנִיָּה', emoji: '🍅' },
        { word: 'גֶּזֶר', emoji: '🥕' }, { word: 'קוֹף', emoji: '🐵' }, { word: 'פָּרָה', emoji: '🐄' },
        { word: 'תַּרְנְגוֹל', emoji: '🐔' }, { word: 'סוּס', emoji: '🐴' }, { word: 'חַזִּיר', emoji: '🐷' },
        { word: 'כִּבְשָׂה', emoji: '🐑' }, { word: 'אוֹפַנַּיִם', emoji: '🚲' }, { word: 'סִירָה', emoji: '⛵' },
        { word: 'טִיל', emoji: '🚀' }, { word: 'מַסּוֹק', emoji: '🚁' }, { word: 'אַמְבּוּלַנְס', emoji: '🚑' },
        { word: 'כַּבָּאִית', emoji: '🚒' }, { word: 'אַרְמוֹן', emoji: '🏰' }, { word: 'עַיִן', emoji: '👁️' },
        { word: 'לֵב', emoji: '❤️' }, { word: 'יָד', emoji: '✋' }, { word: 'בָּלוֹן', emoji: '🎈' },
        { word: 'מַתָּנָה', emoji: '🎁' }, { word: 'מַפְתֵּחַ', emoji: '🔑' }, { word: 'פַּעֲמוֹן', emoji: '🔔' },
        { word: 'שָׁעוֹן', emoji: '⏰' },
        // Expansion 3 (50 words)
        { word: 'שׁוּעָל', emoji: '🦊' }, { word: 'פַּנְדָּה', emoji: '🐼' }, { word: 'דֹּב', emoji: '🐻' },
        { word: 'זֶבְּרָה', emoji: '🦓' }, { word: 'גִ\'ירָפָה', emoji: '🦒' }, { word: 'תַּנִּין', emoji: '🐊' },
        { word: 'צָב', emoji: '🐢' }, { word: 'לִוְיָתָן', emoji: '🐳' }, { word: 'דּוֹלְפִין', 'emoji': '🐬' },
        { word: 'הַמְבּוּרְגֵּר', emoji: '🍔' }, { word: 'צִ\'יפְּס', emoji: '🍟' }, { word: 'סֻפְגָּנִיָּה', emoji: '🍩' },
        { word: 'עוּגִיָּה', emoji: '🍪' }, { word: 'שׁוֹקוֹלָד', emoji: '🍫' }, { word: 'סֻכָּרִיָּה', emoji: '🍭' },
        { word: 'פּוֹפְּקוֹרְן', emoji: '🍿' }, { word: 'בֵּיצָה', emoji: '🥚' }, { word: 'לֶחֶם', emoji: '🍞' },
        { word: 'חוּלְצָה', emoji: '👕' }, { word: 'מִכְנָסַיִם', emoji: '👖' }, { word: 'שִׂמְלָה', emoji: '👗' },
        { word: 'נַעַל', emoji: '👟' }, { word: 'כּוֹבַע', emoji: '👒' }, { word: 'גֶּרֶב', emoji: '🧦' },
        { word: 'כְּפָפָה', emoji: '🧤' }, { word: 'צָעִיף', emoji: '🧣' }, { word: 'מִשְׁקָפַיִם', emoji: '👓' },
        { word: 'כֶּתֶר', emoji: '👑' }, { word: 'קֶשֶׁת', emoji: '🌈' }, { word: 'הַר גַּעַשׁ', emoji: '🌋' },
        { word: 'גַּל', emoji: '🌊' }, { word: 'יָרֵחַ', emoji: '🌙' }, { word: 'שֶׁלֶג', emoji: '❄️' },
        { word: 'אֵשׁ', emoji: '🔥' }, { word: 'טִפָּה', emoji: '💧' }, { word: 'רוּחַ', emoji: '💨' },
        { word: 'בָּרָק', emoji: '⚡' }, { word: 'סוּפָה', emoji: '🌪️' }, { word: 'גִּיטָרָה', emoji: '🎸' },
        { word: 'פְּסַנְתֵּר', emoji: '🎹' }, { word: 'חֲצוֹצְרָה', emoji: '🎺' }, { word: 'כִּנּוֹר', emoji: '🎻' },
        { word: 'תֹּף', emoji: '🥁' }, { word: 'טֶלֶפוֹן', emoji: '📱' }, { word: 'מַחְשֵׁב', emoji: '💻' },
        { word: 'טֶלֶוִיזְיָה', emoji: '📺' }, { word: 'נוּרָה', emoji: '💡' }, { word: 'יַהֲלוֹם', emoji: '💎' },
        { word: 'רוֹבּוֹט', emoji: '🤖' }
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
        shuffleArray(gameData); // Randomize the order of words
        currentWordIndex = 0; // Reset index for the new game
        splashScreen.classList.remove('active');
        gameScreen.classList.add('active');
        loadNewWord();
    }

    function loadNewWord() {
        
        // reset
        // optionElements.forEach(el => {
        //     el.style.transform = 'none'; // Directly reset the transform property
        //     el.style.backgroundColor = 'white'; // Directly reset the background color
        // });
        
        document.getElementById('options-container').classList.remove('no-hover');
        document.getElementById('options-container').classList.remove('hover-active');
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
        document.getElementById('options-container').classList.add('no-hover');

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
                document.getElementById('options-container').classList.remove('no-hover');
                isChecking = false;
            }, 800);
        }
    }

    // --- Event Listeners ---

    startGameBtn.addEventListener('click', startGame);

    optionElements.forEach(el => {
        el.addEventListener('click', (e) => {
            button.classList.add('hover-active');
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

    // Initial setup
});
