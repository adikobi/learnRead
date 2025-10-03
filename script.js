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
        { word: 'זֶבְּרָה', emoji: '🦓' }, { word: ['ג\׳ירפה', 'גירפה'], emoji: '🦒' }, { word: 'תַּנִּין', emoji: '🐊' },
        { word: 'צָב', emoji: '🐢' }, { word: ['לִוְיָתָן', 'לוויתן'], emoji: '🐳' }, { word: 'דּוֹלְפִין', 'emoji': '🐬' },
        { word: 'הַמְבּוּרְגֵּר', emoji: '🍔' }, { word: 'צִ\'יפְּס', emoji: '🍟' }, { word: ['סֻפְגָּנִיָּה', 'סופגניה'], emoji: '🍩' },
        { word: ['עוּגִיָּה', 'עוגייה'], emoji: '🍪' }, { word: 'שׁוֹקוֹלָד', emoji: '🍫' }, { word: ['סֻכָּרִיָּה', 'סוכריה', 'סכריה'], emoji: '🍭' },
        { word: 'פּוֹפְּקוֹרְן', emoji: '🍿' }, { word: 'בֵּיצָה', emoji: '🥚' }, { word: 'לֶחֶם', emoji: '🍞' },
        { word: 'חוּלְצָה', emoji: '👕' }, { word:  ['מִכְנָסַיִם', 'מכנסים', 'מכנסיים'], emoji: '👖' }, { word: 'שִׂמְלָה', emoji: '👗' },
        { word: 'נַעַל', emoji: '👟' }, { word: 'כּוֹבַע', emoji: '👒' }, { word: 'גֶּרֶב', emoji: '🧦' },
        { word: 'כְּפָפָה', emoji: '🧤' }, { word: 'צָעִיף', emoji: '🧣' }, { word: ['מִשְׁקָפַיִם', 'משקפיים', 'משקפים'], emoji: '👓' },
        { word: 'כֶּתֶר', emoji: '👑' }, { word: 'קֶשֶׁת', emoji: '🌈' }, { word: 'הַר גַּעַשׁ', emoji: '🌋' },
        { word: 'גַּל', emoji: '🌊' }, { word: 'יָרֵחַ', emoji: '🌙' }, { word: 'שֶׁלֶג', emoji: '❄️' },
        { word: 'אֵשׁ', emoji: '🔥' }, { word: ['טִפָּה', 'טיפה'], emoji: '💧' }, { word: 'רוּחַ', emoji: '💨' },
        { word: 'בָּרָק', emoji: '⚡' }, { word: 'סוּפָה', emoji: '🌪️' }, { word: 'גִּיטָרָה', emoji: '🎸' },
        { word: 'פְּסַנְתֵּר', emoji: '🎹' }, { word: 'חֲצוֹצְרָה', emoji: '🎺' }, { word: 'כִּנּוֹר', emoji: '🎻' },
        { word: ['תֹּף', 'תוף', 'טוב'], emoji: '🥁' }, { word: 'טֶלֶפוֹן', emoji: '📱' }, { word: 'מַחְשֵׁב', emoji: '💻' },
        { word: ['טֶלֶוִיזְיָה', 'טלוויזיה', 'טלויזיה'], emoji: '📺' }, { word: ['נוּרָה', 'נורא'], emoji: '💡' }, { word: 'יַהֲלוֹם', emoji: '💎' },
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
    const passwordInputs = [...passwordModal.querySelectorAll('.password-digit')];
    const passwordFeedback = document.getElementById('password-feedback');
    const passwordPromptContainer = document.getElementById('password-prompt-container');
    const settingsActionsContainer = document.getElementById('settings-actions-container');
    const saveTimeoutBtn = document.getElementById('save-timeout-btn');
    const changeModeBtn = document.getElementById('change-mode-btn');
    const stepperMinus = document.getElementById('stepper-minus');
    const stepperPlus = document.getElementById('stepper-plus');
    const timeoutDisplay = document.getElementById('timeout-display');


    let currentWordIndex = 0;
    let isChecking = false; // Prevents multiple clicks while checking answer
    let isClassicMode = false; // false = recording mode, true = classic mode (no recording)
    let recordingTimeoutSeconds = 6; // Default timeout
    let modalTimeoutValue = 6; // Temporary value for the modal stepper
    let recognitionTimeoutId = null; // To hold the timeout ID
    let isTimeout = false; // Flag to check if recognition was stopped by our timer

    // --- Speech Recognition Setup ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;

    // Check if the browser supports the API
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'he-IL'; // Set language to Hebrew
        recognition.continuous = false; // Stop listening after the first utterance
        recognition.interimResults = false; // Get final results only
    } else {
        console.error("Speech Recognition not supported in this browser.");
        // Hide the record button if not supported
        recordBtn.classList.add('hidden');
    }


    // --- Game Logic ---

    function startGame() {
        shuffleArray(gameData); // Randomize the order of words
        currentWordIndex = 0; // Reset index for the new game
        splashScreen.classList.remove('active');
        gameScreen.classList.add('active');
        loadNewWord();

        // Proactively request microphone permission if in recording mode
        if (!isClassicMode) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    console.log('Microphone permission granted.');
                    // Stop the stream immediately, we only wanted the permission
                    stream.getTracks().forEach(track => track.stop());
                })
                .catch(err => {
                    console.error('Error requesting microphone permission:', err);
                    if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                        speechFeedbackText.textContent = 'יש לאפשר גישה למיקרופון בהגדרות הדפדפן.';
                        recordBtn.disabled = true;
                    }
                });
        }
    }

    function loadNewWord() {
        isChecking = false;
        feedbackText.textContent = '';
        feedbackText.className = '';
        speechFeedbackText.textContent = '';

        // Reset all option styles to prevent visual glitches (especially on iOS)
        optionElements.forEach(option => {
            option.classList.remove('hover-active', 'shake');
            option.style.transform = 'none'; // Force-reset transform property for iOS rendering bug
        });

        // Get the current word object
        const currentWordData = gameData[currentWordIndex];
        // If the word data is an array, show the first (primary) spelling. Otherwise, show the word string.
        wordElement.textContent = Array.isArray(currentWordData.word) ? currentWordData.word[0] : currentWordData.word;

        if (isClassicMode) {
            // In classic mode, hide the record button and show the options immediately.
            recordBtn.classList.add('hidden');
            showOptions();
        } else {
            // In recording mode, hide options and show the record button.
            optionsContainer.classList.add('hidden');
            recordBtn.classList.remove('hidden');
            recordBtn.disabled = false;
            recordBtn.classList.remove('recording');
        }
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
                selectedElement.classList.remove('hover-active'); 
                selectedElement.classList.remove('shake');
                feedbackText.textContent = '';
                document.getElementById('options-container').classList.remove('no-hover');
                isChecking = false;
            }, 800);
        }
    }

    function showOptions() {
        // Get the current word object
        const currentWord = gameData[currentWordIndex];

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

        // reset hover:
        optionElements.forEach(option => {
            option.classList.remove('hover-active');
        });

        // Display the options
        optionElements.forEach((el, index) => {
            el.textContent = options[index];
            el.dataset.emoji = options[index]; // Store emoji in data attribute
        });

        // Show the container
        optionsContainer.classList.remove('hidden');
        optionsContainer.classList.remove('no-hover');
    }

    function handleSpeechRecognition() {
        // Force reset UI state before starting a new recognition
        recordBtn.classList.remove('recording');
        recordBtn.disabled = false;
        speechFeedbackText.textContent = '';
        speechFeedbackText.className = '';

        // Advanced fix for iOS/iPadOS: Resume AudioContext if it's suspended
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }

        if (!recognition) {
            speechFeedbackText.textContent = "דפדפן לא נתמך.";
            return;
        }
        recordBtn.disabled = true;
        recordBtn.classList.add('recording');
        speechFeedbackText.textContent = 'מקליט...';

        // Clear any existing timeout
        if (recognitionTimeoutId) {
            clearTimeout(recognitionTimeoutId);
        }

        isTimeout = false; // Reset the timeout flag
        // Set a timeout to stop recognition
        recognitionTimeoutId = setTimeout(() => {
            isTimeout = true; // Set the flag before stopping
            recognition.stop();
        }, recordingTimeoutSeconds * 1000);

        try {
            recognition.start();
        } catch (err) {
            console.error('Error starting speech recognition:', err);
            speechFeedbackText.textContent = 'שגיאה בהפעלת המיקרופון. נסה לרענן.';
            speechFeedbackText.className = 'incorrect shake';
            recordBtn.classList.remove('recording');
            recordBtn.disabled = false;
        }
    }

    if (recognition) {
        recognition.onresult = (event) => {
            clearTimeout(recognitionTimeoutId);
            recognition.stop(); // Explicitly stop the recognition service

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
                recordBtn.classList.remove('recording'); // Ensure UI updates immediately
                setTimeout(() => {
                    recordBtn.classList.add('hidden');
                    showOptions();
                    speechFeedbackText.textContent = '';
                    speechFeedbackText.className = '';
                }, 1500);
            } else {
                // Word is incorrect, now check if it was due to a timeout.
                if (isTimeout) {
                    speechFeedbackText.textContent = `שמעתי "${spokenWord}", אבל הזמן עבר.`;
                } else {
                    speechFeedbackText.textContent = `שמעתי "${spokenWord}". נסה שוב.`;
                }
                speechFeedbackText.classList.add('incorrect', 'shake');
                // Manually reset button state for immediate feedback
                recordBtn.classList.remove('recording');
                recordBtn.disabled = false;
            }
            isTimeout = false; // Reset flag after use
        };

        recognition.onerror = (event) => {
            clearTimeout(recognitionTimeoutId);
            recognition.stop(); // Ensure it's stopped.

            // Manually reset button state for immediate feedback in all error cases
            recordBtn.classList.remove('recording');
            recordBtn.disabled = false;

            // Determine the error message
            if (isTimeout && event.error === 'no-speech') {
                speechFeedbackText.textContent = 'הזמן עבר, ולא שמעתי כלום. נסה שוב.';
            } else if (event.error === 'no-speech') {
                speechFeedbackText.textContent = 'לא שמעתי כלום. נסה שוב.';
            } else if (event.error === 'not-allowed') {
                speechFeedbackText.textContent = 'יש לאפשר גישה למיקרופון.';
            } else {
                speechFeedbackText.textContent = 'אופס, קרתה שגיאה. נסה שוב.';
            }

            speechFeedbackText.className = 'incorrect shake';
            isTimeout = false; // Reset flag
            console.error('Full speech recognition error object:', event);
        };

        recognition.onend = () => {
            recordBtn.classList.remove('recording');
            // Re-enable only if it's not hidden (i.e. recognition was successful)
            if (!recordBtn.classList.contains('hidden')) {
                recordBtn.disabled = false;
            }
        };
    }

    let audioContext;
    let isAudioInitialized = false;

    // Function to initialize audio context on user gesture, crucial for iOS/iPadOS
    function initializeAudio() {
        if (isAudioInitialized) return;
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            isAudioInitialized = true;
            console.log("AudioContext initialized successfully.");
        } catch (e) {
            console.error("Could not initialize AudioContext:", e);
        }
    }

    // --- Event Listeners ---

    startGameBtn.addEventListener('click', () => {
        initializeAudio();
        startGame();
    });
    recordBtn.addEventListener('click', handleSpeechRecognition);

    // --- Password Modal Logic ---
    function openPasswordModal() {
        passwordModal.classList.remove('hidden');
        // Reset to password prompt state
        passwordPromptContainer.classList.remove('hidden');
        settingsActionsContainer.classList.add('hidden');
        passwordFeedback.textContent = '';
        passwordInputs.forEach(input => input.value = '');

        // Set the temporary modal value to the currently active timeout
        modalTimeoutValue = recordingTimeoutSeconds;
        timeoutDisplay.textContent = modalTimeoutValue;

        passwordInputs[0].focus();
    }

    function closePasswordModal() {
        passwordModal.classList.add('hidden');
    }

    function handlePasswordInput(e) {
        const input = e.target;
        const value = input.value;
        const fieldIndex = passwordInputs.indexOf(input);

        // If the input is a digit, move to the next field
        if (/^[0-9]$/.test(value)) {
            if (fieldIndex < passwordInputs.length - 1) {
                passwordInputs[fieldIndex + 1].focus();
            } else {
                // Last digit entered, check the code
                checkPassword();
            }
        }
    }

    function handlePasswordKeydown(e) {
        const input = e.target;
        const fieldIndex = passwordInputs.indexOf(input);

        // Handle backspace to move to the previous field
        if (e.key === 'Backspace' && !input.value && fieldIndex > 0) {
            passwordInputs[fieldIndex - 1].focus();
        }
    }

    function checkPassword() {
        const enteredCode = passwordInputs.map(input => input.value).join('');
        if (enteredCode === "6417") {
            passwordFeedback.textContent = 'סיסמה נכונה!';
            passwordFeedback.className = 'correct feedback';

            // Show action buttons and hide password prompt
            setTimeout(() => {
                passwordPromptContainer.classList.add('hidden');
                settingsActionsContainer.classList.remove('hidden');
            }, 300);

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

    function saveTimeout() {
        recordingTimeoutSeconds = modalTimeoutValue;
        localStorage.setItem('recordingTimeout', recordingTimeoutSeconds);
        closePasswordModal(); // Close modal immediately after saving
    }

    function changeMode() {
        isClassicMode = !isClassicMode;
        localStorage.setItem('isClassicMode', isClassicMode); // Save the mode
        const newMode = isClassicMode ? "קלאסי (ללא הקלטה)" : "הקלטה";
        alert(`מצב המשחק שונה ל: ${newMode}`);
        closePasswordModal();
        loadNewWord();
    }


    toggleModeBtn.addEventListener('click', openPasswordModal);
    closeBtn.addEventListener('click', closePasswordModal);
    passwordInputs.forEach(input => {
        input.addEventListener('input', handlePasswordInput);
        input.addEventListener('keydown', handlePasswordKeydown);
    });
    saveTimeoutBtn.addEventListener('click', saveTimeout);
    changeModeBtn.addEventListener('click', changeMode);

    stepperMinus.addEventListener('click', () => {
        if (modalTimeoutValue > 1) {
            modalTimeoutValue--;
            timeoutDisplay.textContent = modalTimeoutValue;
        }
    });

    stepperPlus.addEventListener('click', () => {
        if (modalTimeoutValue < 15) {
            modalTimeoutValue++;
            timeoutDisplay.textContent = modalTimeoutValue;
        }
    });


    optionElements.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.add('hover-active');
            checkAnswer(e.target); // Pass the element itself
        });
    });

    // Stop microphone if the user switches tabs or minimizes the app
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && recognition) {
            recognition.abort();
            console.log("Recognition aborted due to page visibility change.");
        }
    });

    // --- Utility Functions ---

    /* Fisher-Yates shuffle algorithm */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /**
     * Normalizes text for comparison by removing nikkud, punctuation, and extra whitespace.
     * Uses a multi-stage approach for maximum robustness across platforms.
     * @param {string} text The text to normalize.
     * @returns {string} The normalized text.
     */
    function normalizeText(text) {
        if (!text) return "";

        // Stage 1: Remove invisible Unicode control characters, like the Right-to-Left Mark (RLM).
        // This is the key fix for the mobile bug.
        let normalized = text.replace(/[\u200F]/g, "");

        // Stage 2: General Unicode normalization to decompose characters and remove most diacritics.
        normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Stage 3: Explicitly remove Hebrew-specific nikkud characters that might be missed.
        normalized = normalized.replace(/[\u0591-\u05C7]/g, "");

        // Stage 4: Remove common punctuation that might be added by speech-to-text engines.
        normalized = normalized.replace(/[.,?!'"]/g, "");

        // Stage 5: Trim whitespace and re-compose the string to its normal form.
        return normalized.trim().normalize("NFC");
    }

    // Initial setup
    function loadSettings() {
        const savedTimeout = localStorage.getItem('recordingTimeout');
        if (savedTimeout) {
            recordingTimeoutSeconds = parseInt(savedTimeout, 10);
        }
        modalTimeoutValue = recordingTimeoutSeconds;
        timeoutDisplay.textContent = modalTimeoutValue;

        const savedMode = localStorage.getItem('isClassicMode');
        if (savedMode !== null) {
            isClassicMode = (savedMode === 'true');
        }
    }

    loadSettings();
});
