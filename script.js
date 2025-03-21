let currentLevel, currentVersion, currentQuestion;
let score = 0;

const sounds = {
    correct: createAudio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3'),
    wrong: createAudio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-948.mp3'),
    question: createAudio('https://assets.mixkit.co/sfx/preview/mixkit-short-whoosh-1486.mp3')
};

// Helper function to create audio with error handling
function createAudio(url) {
    const audio = new Audio(url);
    audio.onerror = () => console.log(`Failed to load audio: ${url}`);
    return audio;
}

function playSound(soundKey) {
    const sound = sounds[soundKey];
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(error => console.log(`Audio play error for ${soundKey}:`, error));
    }
}

function startLevel(level) {
    currentLevel = level;
    currentVersion = Math.floor(Math.random() * 6);
    currentQuestion = 0;
    score = 0;
    document.getElementById('level-select').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('level-title').textContent = levels[level].name;
    document.getElementById('game-container').style.backgroundImage = `url(${levels[level].background})`;
    document.getElementById('game-container').style.backgroundSize = 'cover';
    document.getElementById('game-container').style.backgroundPosition = 'center';
    showQuestion();
}

function showQuestion() {
    const question = levels[currentLevel].quizVersions[currentVersion][currentQuestion];
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('hint').textContent = `Hint: ${question.hint}`;
    document.getElementById('result').textContent = '';
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(String.fromCharCode(65 + index));
        optionsDiv.appendChild(btn);
    });
    playSound('question');
}

function checkAnswer(userAnswer) {
    const question = levels[currentLevel].quizVersions[currentVersion][currentQuestion];
    const result = document.getElementById('result');
    if (userAnswer === question.answer) {
        score++;
        result.textContent = `Correct! Salamat! Score: ${score}/5`;
        result.style.color = 'green';
        playSound('correct');
    } else {
        result.textContent = `Wrong! The answer is ${question.options[question.answer.charCodeAt(0) - 65]}. Score: ${score}/5`;
        result.style.color = 'red';
        playSound('wrong');
    }
    currentQuestion++;
    if (currentQuestion < 5) {
        setTimeout(showQuestion, 2000);
    } else {
        result.textContent = `Level Complete! Final Score: ${score}/5. Pick another level.`;
        setTimeout(() => {
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('level-select').style.display = 'block';
            document.getElementById('game-container').style.backgroundImage = 'none';
        }, 2000);
    }
}
