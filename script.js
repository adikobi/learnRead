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
        { word: ['מִטְרִיָּה', 'מטרייה'], emoji: '☔' },
        // Expansion 2 (25 words)
        { word: 'אֲבַטִּיחַ', emoji: '🍉' }, { word: 'תּוּת', emoji: '🍓' }, { word: 'עַגְבָנִיָּה', emoji: '🍅' },
        { word: 'גֶּזֶר', emoji: '🥕' }, { word: 'קוֹף', emoji: '🐵' }, { word: 'פָּרָה', emoji: '🐄' },
        { word: 'תַּרְנְגוֹל', emoji: '🐔' }, { word: 'סוּס', emoji: '🐴' }, { word: 'חַזִּיר', emoji: '🐷' },
        { word: 'כִּבְשָׂה', emoji: '🐑' }, { word: ['אוֹפַנַּיִם', 'אופניים', 'אופנים'], emoji: '🚲' }, { word: 'סִירָה', emoji: '⛵' },
        { word: 'טִיל', emoji: '🚀' }, { word: 'מַסּוֹק', emoji: '🚁' }, { word: 'אַמְבּוּלַנְס', emoji: '🚑' },
        { word: 'כַּבָּאִית', emoji: '🚒' }, { word: 'אַרְמוֹן', emoji: '🏰' }, { word: 'עַיִן', emoji: '👁️' },
        { word: 'לֵב', emoji: '❤️' }, { word: 'יָד', emoji: '✋' }, { word: 'בָּלוֹן', emoji: '🎈' },
        { word: 'מַתָּנָה', emoji: '🎁' }, { word: 'מַפְתֵּחַ', emoji: '🔑' }, { word: 'פַּעֲמוֹן', emoji: '🔔' },
        { word: 'שָׁעוֹן', emoji: '⏰' },
        // Expansion 3 (50 words)
        { word: 'שׁוּעָל', emoji: '🦊' }, { word: 'פַּנְדָּה', emoji: '🐼' }, { word: 'דֹּב', emoji: '🐻' },
        { word: 'זֶבְּרָה', emoji: '🦓' }, { word: 'גִ'ירָפָה', emoji: '🦒' }, { word: 'תַּנִּין', emoji: '🐊' },
        { word: 'צָב', emoji: '🐢' }, { word: ['לִוְיָתָן', 'לוויתן'], emoji: '🐳' }, { word: 'דּוֹלְפִין', 'emoji': '🐬' },
        { word: 'הַמְבּוּרְגֵּר', emoji: '🍔' }, { word: 'צִ\'יפְּס', emoji: '🍟' }, { word: ['סֻפְגָּנִיָּה', 'סופגניה'], emoji: '🍩' },
        { word: ['עוּגִיָּה', 'עוגייה'], emoji: '🍪' }, { word: 'שׁוֹקוֹלָד', emoji: '🍫' }, { word: ['סֻכָּרִיָּה', 'סוכריה', 'סכריה'], emoji: '🍭' },
        { word: 'פּוֹפְּקוֹרְן', emoji: '🍿' }, { word: 'בֵּיצָה', emoji: '🥚' }, { word: 'לֶחֶם', emoji: '🍞' },
        { word: 'חוּלְצָה', emoji: '👕' }, { word:  ['מִכְנָסַיִם', 'מכנסים', 'מכנסיים'], emoji: '👖' }, { word: 'שִׂמְלָה', emoji: '👗' },
        { word: 'נַעַל', emoji: '👟' }, { word: 'כּוֹבַע', emoji: '👒' }, { word: 'גֶּרֶב', emoji: '🧦' },
        { word: 'כְּפָפָה', emoji: '🧤' }, { word: 'צָעִיף', emoji: '🧣' }, { word: ['מִשְׁקָפַיִם', 'משקפיים', 'משקפים'], emoji: '👓' },
        { word: 'כֶּתֶר', emoji: '👑' }, { word: 'קֶשֶׁת', emoji: '🌈' }, { word: 'הַר גַּעַשׁ', emoji: '🌋' },
        { word: 'גַּל', emoji: '🌊' }, { word: 'יָרֵחַ', emoji: '🌙' }, { word: 'שֶׁלֶג', emoji: '❄️' },
        { word: 'אֵשׁ', emoji: '🔥' }, { word: 'טִפָּה', emoji: '💧' }, { word: 'רוּחַ', emoji: '💨' },
        { word: 'בָּרָק', emoji: '⚡' }, { word: 'סוּפָה', emoji: '🌪️' }, { word: 'גִּיטָרָה', emoji: '🎸' },
        { word: 'פְּסַנְתֵּר', emoji: '🎹' }, { word: 'חֲצוֹצְרָה', emoji: '🎺' }, { word: 'כִּנּוֹר', emoji: '🎻' },
        { word: 'תֹּף', emoji: '🥁' }, { word: 'טֶלֶפוֹן', emoji: '📱' }, { word: 'מַחְשֵׁב', emoji: '💻' },
        { word: ['טֶלֶוִיזְיָה', 'טלוויזיה', 'טלויזיה'], emoji: '📺' }, { word: 'נוּרָה', emoji: '💡' }, { word: 'יַהֲלוֹם', emoji: '💎' },
        { word: 'רוֹבּוֹט', emoji: '🤖' }
    ];

    // DOM Elements
    const splashScreen = document.getElementById('splash-screen');
    const gameScreen = document.getElementById('game-screen');
    const startGameBtn = document.getElementById('start-game-btn');
    const wordElement = document.getElementById('word');
    const optionsContainer = document.getElementById('options-container');
    const optionElements = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3')
    ];
    const feedbackText = document.getElementById('feedback-text');
    const recordBtn = document.getElementById('record-btn');
    const speechFeedbackText = document.getElementById('speech-feedback-text');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const shootConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true,
    });
    const toggleModeBtn = document.getElementById('toggle-mode-btn');

    // Password Modal Elements
    const passwordModal = document.getElementById('password-modal');
    const closeBtn = passwordModal.querySelector('.close-btn');
    const passwordSection = document.getElementById('password-section');
    const settingsSection = document.getElementById('settings-section');
    const passwordInputs = [...passwordModal.querySelectorAll('.password-digit')];
    const passwordFeedback = document.getElementById('password-feedback');
    const timeoutInput = document.getElementById('timeout-input');
    const currentModeText = document.getElementById('current-mode-text');
    const changeModeBtn = document.getElementById('change-mode-btn');
    const saveSettingsBtn = document.getElementById('save-settings-btn');


    let currentWordIndex = 0;
    let isChecking = false; // Prevents multiple clicks while checking answer
    let isClassicMode = false; // false = recording mode, true = classic mode (no recording)
    let recordingTimeoutSeconds = 7; // Default timeout

    // --- Game Logic ---

    function startGame() {
        shuffleArray(gameData); // Randomize the order of words
        currentWordIndex = 0; // Reset index for the new game
        splashScreen.classList.remove('active');
        gameScreen.classList.add('active');
        loadNewWord();
    }

    function loadNewWord() {
        isChecking = false;
        feedbackText.textContent = '';
        feedbackText.className = '';
        speechFeedbackText.textContent = '';

        optionElements.forEach(option => {
            option.classList.remove('hover-active', 'shake');
            option.style.transform = 'none';
        });

        const currentWordData = gameData[currentWordIndex];
        wordElement.textContent = Array.isArray(currentWordData.word) ? currentWordData.word[0] : currentWordData.word;

        if (isClassicMode) {
            recordBtn.classList.add('hidden');
            showOptions();
        } else {
            optionsContainer.classList.add('hidden');
            recordBtn.classList.remove('hidden');
            recordBtn.disabled = false;
            recordBtn.classList.remove('recording');
        }
    }

    function checkAnswer(selectedElement) {
        if (isChecking) return;
        isChecking = true;
        document.getElementById('options-container').classList.add('no-hover');

        const selectedEmoji = selectedElement.dataset.emoji;
        const correctEmoji = gameData[currentWordIndex].emoji;

        if (selectedEmoji === correctEmoji) {
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
                    wordElement.textContent = 'סיימת את המשחק!';
                    document.getElementById('options-container').style.display = 'none';
                    feedbackText.textContent = '🎉 כל הכבוד!';
                    shootConfetti({ particleCount: 200, spread: 120 });
                } else {
                    loadNewWord();
                }
            }, 2000);
        } else {
            selectedElement.classList.add('shake');
            feedbackText.textContent = '😟 נסה שוב';
            feedbackText.className = 'incorrect feedback-animation';

            setTimeout(() => {
                selectedElement.classList.remove('hover-active'); 
                selectedElement.classList.remove('shake');
                feedbackText.textContent = '';
                document.getElementById('options-container').classList.remove('no-hover');
                isChecking = false;
            }, 800);
        }
    }

    function showOptions() {
        const currentWord = gameData[currentWordIndex];
        let incorrectOptions = [];
        while (incorrectOptions.length < 2) {
            const randomIndex = Math.floor(Math.random() * gameData.length);
            const randomEmoji = gameData[randomIndex].emoji;
            if (randomEmoji !== currentWord.emoji && !incorrectOptions.includes(randomEmoji)) {
                incorrectOptions.push(randomEmoji);
            }
        }

        const options = [currentWord.emoji, ...incorrectOptions];
        shuffleArray(options);

        optionElements.forEach(option => {
            option.classList.remove('hover-active');
        });

        optionElements.forEach((el, index) => {
            el.textContent = options[index];
            el.dataset.emoji = options[index];
        });

        optionsContainer.classList.remove('hidden');
        optionsContainer.classList.remove('no-hover');
    }

    function handleSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            speechFeedbackText.textContent = "דפדפן לא נתמך.";
            recordBtn.classList.add('hidden'); // Hide button permanently if API not supported
            return;
        }

        // Create a new recognition object for each attempt
        const recognition = new SpeechRecognition();
        recognition.lang = 'he-IL';
        recognition.continuous = false;
        recognition.interimResults = false;

        let recognitionStopTimeout;

        recognition.onresult = (event) => {
            clearTimeout(recognitionStopTimeout);

            const spokenWord = event.results[0][0].transcript;
            const correctWordData = gameData[currentWordIndex].word;
            const normalizedSpokenWord = normalizeText(spokenWord);

            let isCorrect = false;
            if (Array.isArray(correctWordData)) {
                isCorrect = correctWordData.some(word => normalizeText(word) === normalizedSpokenWord);
            } else {
                isCorrect = normalizeText(correctWordData) === normalizedSpokenWord;
            }

            speechFeedbackText.className = '';

            if (isCorrect) {
                speechFeedbackText.textContent = 'נהדר!';
                speechFeedbackText.classList.add('correct');
                shootConfetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                recordBtn.disabled = true;
                setTimeout(() => {
                    recordBtn.classList.add('hidden');
                    showOptions();
                    speechFeedbackText.textContent = '';
                    speechFeedbackText.className = '';
                }, 1500);
            } else {
                speechFeedbackText.textContent = `שמעתי "${spokenWord}". נסה שוב.`;
                speechFeedbackText.classList.add('incorrect', 'shake');
            }
        };

        recognition.onerror = (event) => {
            clearTimeout(recognitionStopTimeout);
            console.error('Speech recognition error:', event.error);
            speechFeedbackText.className = '';
            speechFeedbackText.classList.add('incorrect', 'shake');

            if (event.error === 'no-speech') {
                speechFeedbackText.textContent = 'לא שמעתי כלום. נסה שוב.';
            } else if (event.error === 'not-allowed') {
                speechFeedbackText.textContent = 'יש לאפשר גישה למיקרופון.';
            } else {
                speechFeedbackText.textContent = `אופס, קרתה שגיאה: ${event.error}. נסה שוב.`;
            }
        };

        recognition.onend = () => {
            clearTimeout(recognitionStopTimeout);
            recordBtn.classList.remove('recording');
            if (!recordBtn.classList.contains('hidden')) {
                recordBtn.disabled = false;
            }
        };

        recordBtn.disabled = true;
        recordBtn.classList.add('recording');
        speechFeedbackText.textContent = 'מקליט...';
        recognition.start();

        recognitionStopTimeout = setTimeout(() => {
            console.log(`Forcing recognition to stop after ${recordingTimeoutSeconds} seconds.`);
            recognition.stop();
        }, recordingTimeoutSeconds * 1000);
    }

    // --- Event Listeners ---
    startGameBtn.addEventListener('click', startGame);
    recordBtn.addEventListener('click', handleSpeechRecognition);

    // --- Password Modal Logic ---
    function openPasswordModal() {
        passwordModal.classList.remove('hidden');
        settingsSection.classList.add('hidden');
        passwordSection.classList.remove('hidden');
        passwordFeedback.textContent = '';
        passwordInputs.forEach(input => input.value = '');
        passwordInputs[0].focus();
    }

    function closePasswordModal() {
        passwordModal.classList.add('hidden');
    }

    function handlePasswordInput(e) {
        const input = e.target;
        const value = input.value;
        const fieldIndex = passwordInputs.indexOf(input);

        if (/^[0-9]$/.test(value)) {
            if (fieldIndex < passwordInputs.length - 1) {
                passwordInputs[fieldIndex + 1].focus();
            } else {
                checkPassword();
            }
        }
    }

    function handlePasswordKeydown(e) {
        const input = e.target;
        const fieldIndex = passwordInputs.indexOf(input);

        if (e.key === 'Backspace' && !input.value && fieldIndex > 0) {
            passwordInputs[fieldIndex - 1].focus();
        }
    }

    function checkPassword() {
        const enteredCode = passwordInputs.map(input => input.value).join('');
        if (enteredCode === "6417") {
            passwordFeedback.textContent = 'סיסמה נכונה!';
            passwordFeedback.className = 'correct feedback';

            setTimeout(() => {
                passwordSection.classList.add('hidden');
                settingsSection.classList.remove('hidden');
                timeoutInput.value = recordingTimeoutSeconds;
                currentModeText.textContent = isClassicMode ? "קלאסי (ללא הקלטה)" : "הקלטה";
            }, 500);

        } else {
            passwordFeedback.textContent = 'סיסמה שגויה. נסה שוב.';
            passwordFeedback.className = 'incorrect feedback';
            passwordInputs.forEach(input => {
                input.classList.add('shake');
            });
            setTimeout(() => {
                passwordInputs.forEach(input => input.classList.remove('shake'));
                passwordInputs[0].focus();
                passwordInputs.forEach(input => input.value = '');
            }, 500);
        }
    }

    toggleModeBtn.addEventListener('click', openPasswordModal);
    closeBtn.addEventListener('click', closePasswordModal);
    passwordInputs.forEach(input => {
        input.addEventListener('input', handlePasswordInput);
        input.addEventListener('keydown', handlePasswordKeydown);
    });

    changeModeBtn.addEventListener('click', () => {
        isClassicMode = !isClassicMode;
        currentModeText.textContent = isClassicMode ? "קלאסי (ללא הקלטה)" : "הקלטה";
        alert(`מצב המשחק שונה ל: ${currentModeText.textContent}`);
    });

    saveSettingsBtn.addEventListener('click', () => {
        const newTimeout = parseInt(timeoutInput.value, 10);
        if (newTimeout >= 1 && newTimeout <= 20) {
            recordingTimeoutSeconds = newTimeout;
            closePasswordModal();
            loadNewWord();
        } else {
            alert("יש להזין מספר שניות בין 1 ל-20.");
        }
    });

    optionElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.add('hover-active');
            checkAnswer(e.target);
        });
    });

    document.addEventListener('visibilitychange', () => {
        // Note: We can't abort a recognition that doesn't exist globally anymore.
        // This is an acceptable trade-off for fixing the 'aborted' bug.
        // The timeout will handle cases where the tab is hidden mid-recording.
        console.log("Visibility change detected. The recognition service will be stopped by its timeout if running.");
    });

    // --- Utility Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function normalizeText(text) {
        if (!text) return "";
        let normalized = text.replace(/[\u200F]/g, "");
        normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        normalized = normalized.replace(/[\u0591-\u05C7]/g, "");
        normalized = normalized.replace(/[.,?!'"]/g, "");
        return normalized.trim().normalize("NFC");
    }
});