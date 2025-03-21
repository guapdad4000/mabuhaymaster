import levels from "./quizData";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const App = () => {
  const [state, setState] = useState("title");
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQuizVersion, setCurrentQuizVersion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });
  const [lives, setLives] = useState(3);
  const [cursorPos, setCursorPos] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 150, y: 100 });
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Audio starts muted

  const titleMusicRef = useRef(null);
  const battleMusicRef = useRef(null);
  const loseMusicRef = useRef(null);
  // Ignoring winMusicRef for now

  const GAME_STATE = {
    TITLE: "title",
    MAP: "map",
    LEVEL: "level",
    GAME_OVER: "game_over",
    WIN: "win",
  };

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score.toString());
    }
  }, [score, highScore]);

  useEffect(() => {
    const playAudio = (audioRef) => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.loop = true; // Ensure looping
        audioRef.current.muted = isMuted; // Use isMuted state
        audioRef.current
          .play()
          .catch((err) => console.error("Audio playback error:", err.message));
      }
    };

    const pauseAllExcept = (keepPlayingRef) => {
      [titleMusicRef, battleMusicRef, loseMusicRef].forEach((ref) => {
        if (ref !== keepPlayingRef && ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });
    };

    // Initially mute all audio to comply with autoplay policies
    [titleMusicRef, battleMusicRef, loseMusicRef].forEach((ref) => {
      if (ref.current) ref.current.muted = true;
    });

    if (state === GAME_STATE.TITLE) {
      pauseAllExcept(titleMusicRef);
      playAudio(titleMusicRef);
    } else if (state === GAME_STATE.MAP || state === GAME_STATE.LEVEL) {
      pauseAllExcept(battleMusicRef);
      playAudio(battleMusicRef);
    } else if (state === GAME_STATE.GAME_OVER) {
      pauseAllExcept(loseMusicRef);
      playAudio(loseMusicRef);
    } else if (state === GAME_STATE.WIN) {
      pauseAllExcept(null); // No music for WIN state since we're ignoring winMusicRef
    }

    return () => {
      [titleMusicRef, battleMusicRef, loseMusicRef].forEach((ref) => {
        if (ref.current) ref.current.pause();
      });
    };
  }, [state, isMuted]);

  const handleUserInteraction = () => {
    setIsMuted(false); // Unmute on user interaction
    [titleMusicRef, battleMusicRef, loseMusicRef].forEach((ref) => {
      if (ref.current) ref.current.muted = false;
    });
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    [titleMusicRef, battleMusicRef, loseMusicRef].forEach((ref) => {
      if (ref.current) ref.current.muted = !isMuted;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleUserInteraction();
      if (state === GAME_STATE.TITLE && e.key === "Enter") {
        setState(GAME_STATE.MAP);
      } else if (state === GAME_STATE.MAP) {
        if (e.key === "w" && cursorPos > 2) setCursorPos(cursorPos - 2);
        if (e.key === "s" && cursorPos < 3) setCursorPos(cursorPos + 2);
        if (e.key === "a" && cursorPos > 1) setCursorPos(cursorPos - 1);
        if (e.key === "d" && cursorPos < 4) setCursorPos(cursorPos + 1);
        if (e.key === "Enter") {
          setCurrentLevel(cursorPos);
          const versionIndex = Math.floor(
            Math.random() * levels[cursorPos].quizVersions.length
          );
          setCurrentQuizVersion(versionIndex);
          setQuestionIndex(0);
          setScore(0);
          setLives(3);
          setState(GAME_STATE.LEVEL);
        }
      } else if (
        (state === GAME_STATE.GAME_OVER || state === GAME_STATE.WIN) &&
        e.key === "Escape"
      ) {
        setState(GAME_STATE.MAP);
      } else if (state === GAME_STATE.LEVEL && e.key.toLowerCase() === "h") {
        setShowHint((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, cursorPos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (state !== GAME_STATE.MAP) return;
      const rect = document
        .querySelector(".map-container img")
        ?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x: x - 50, y: y - 50 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [state]);

  const handleAnswer = (answer) => {
    if (state !== GAME_STATE.LEVEL) return;
    const correctAnswer =
      levels[currentLevel].quizVersions[currentQuizVersion][questionIndex]
        .answer;
    const isCorrect = answer === correctAnswer;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      setFeedback(null);
      if (!isCorrect) {
        setLives(lives - 1);
        if (lives - 1 <= 0) setState(GAME_STATE.GAME_OVER);
        return;
      }
      setScore(score + 1);
      const nextIndex = questionIndex + 1;
      if (
        nextIndex < levels[currentLevel].quizVersions[currentQuizVersion].length
      ) {
        setQuestionIndex(nextIndex);
      } else {
        setState(GAME_STATE.WIN);
      }
    }, 1000);
  };

  const handleMapClick = (e) => {
    handleUserInteraction();
    if (state !== GAME_STATE.MAP) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && x <= 400 && y >= 0 && y <= 300) {
      setCurrentLevel(1);
      setCursorPos(1);
      setMousePos({ x: 150, y: 100 });
      const versionIndex = Math.floor(
        Math.random() * levels[1].quizVersions.length
      );
      setCurrentQuizVersion(versionIndex);
      setQuestionIndex(0);
      setScore(0);
      setLives(3);
      setState(GAME_STATE.LEVEL);
    } else if (x >= 400 && x <= 800 && y >= 0 && y <= 300) {
      setCurrentLevel(2);
      setCursorPos(2);
      setMousePos({ x: 550, y: 100 });
      const versionIndex = Math.floor(
        Math.random() * levels[2].quizVersions.length
      );
      setCurrentQuizVersion(versionIndex);
      setQuestionIndex(0);
      setScore(0);
      setLives(3);
      setState(GAME_STATE.LEVEL);
    } else if (x >= 0 && x <= 400 && y >= 300 && y <= 600) {
      setCurrentLevel(3);
      setCursorPos(3);
      setMousePos({ x: 150, y: 400 });
      const versionIndex = Math.floor(
        Math.random() * levels[3].quizVersions.length
      );
      setCurrentQuizVersion(versionIndex);
      setQuestionIndex(0);
      setScore(0);
      setLives(3);
      setState(GAME_STATE.LEVEL);
    } else if (x >= 400 && x <= 800 && y >= 300 && y <= 600) {
      setCurrentLevel(4);
      setCursorPos(4);
      setMousePos({ x: 550, y: 400 });
      const versionIndex = Math.floor(
        Math.random() * levels[4].quizVersions.length
      );
      setCurrentQuizVersion(versionIndex);
      setQuestionIndex(0);
      setScore(0);
      setLives(3);
      setState(GAME_STATE.LEVEL);
    }
  };

  const handleTitleClick = () => {
    handleUserInteraction();
    if (state === GAME_STATE.TITLE) {
      setState(GAME_STATE.MAP);
    }
  };

  const handleRetry = () => {
    handleUserInteraction();
    const versionIndex = Math.floor(
      Math.random() * levels[currentLevel].quizVersions.length
    );
    setCurrentQuizVersion(versionIndex);
    setQuestionIndex(0);
    setScore(0);
    setLives(3);
    setState(GAME_STATE.LEVEL);
  };

  const handleNextChapter = () => {
    handleUserInteraction();
    const nextLevel = currentLevel < 4 ? currentLevel + 1 : null;
    if (nextLevel) {
      setCurrentLevel(nextLevel);
      setCursorPos(nextLevel);
      setMousePos(
        nextLevel % 2 === 1
          ? { x: 150, y: nextLevel <= 2 ? 100 : 400 }
          : { x: 550, y: nextLevel <= 2 ? 100 : 400 }
      );
      const versionIndex = Math.floor(
        Math.random() * levels[nextLevel].quizVersions.length
      );
      setCurrentQuizVersion(versionIndex);
      setQuestionIndex(0);
      setScore(0);
      setLives(3);
      setState(GAME_STATE.LEVEL);
    } else {
      setState(GAME_STATE.MAP);
    }
  };

  const toggleHint = () => {
    setShowHint((prev) => !prev);
  };

  const renderTitle = () => (
    <div className="title-container" onClick={handleTitleClick}>
      <img
        src="https://i.imgur.com/nCi28sk.gif"
        alt="Title"
        className="fullscreen"
      />
      <div className="title-text">Press Enter or Click to Start</div>
    </div>
  );

  const renderMap = () => (
    <div className="map-container">
      <img
        src="https://i.imgur.com/i8itzDh.gif"
        alt="Map"
        className="fullscreen"
        onClick={handleMapClick}
        style={{ zIndex: 1 }}
      />
      <img
        src="https://i.imgur.com/4hQE4sZ.gif"
        alt="Map Cursor"
        className="map-cursor"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
    </div>
  );

  const renderLevel = () => {
    if (!currentLevel || !levels[currentLevel])
      return <div className="error">Error: Invalid Level</div>;
    if (
      currentQuizVersion === null ||
      !levels[currentLevel].quizVersions[currentQuizVersion]
    )
      return <div className="error">Error: Invalid Quiz Version</div>;
    const level = levels[currentLevel];
    const questions = level.quizVersions[currentQuizVersion];
    if (!questions[questionIndex])
      return <div className="error">Error: Invalid Question</div>;
    const question = questions[questionIndex];

    // Determine the current track name based on the state
    let currentTrack = "";
    if (state === GAME_STATE.TITLE) currentTrack = "Title Music";
    else if (state === GAME_STATE.MAP || state === GAME_STATE.LEVEL)
      currentTrack = "Battle Music";
    else if (state === GAME_STATE.GAME_OVER) currentTrack = "Lose Music";
    else if (state === GAME_STATE.WIN) currentTrack = "No Music"; // Since we're ignoring win music

    return (
      <div className="level-container">
        <img
          src={level.background}
          alt={level.name}
          className="fullscreen"
          style={{ zIndex: 0 }}
        />
        <div className="lives-display">
          <img
            src="https://i.imgur.com/92RMX8c.png"
            alt="Life"
            className="life-label"
          />
          <div className="hearts-container">
            {Array.from({ length: lives }, (_, i) => (
              <img
                key={i}
                src="https://i.imgur.com/Y0zvkGF.gif"
                alt="Life"
                className="heart"
              />
            ))}
          </div>
        </div>
        <button className="hint-toggle-button" onClick={toggleHint}>
          {showHint ? "Hide Hint (H)" : "Show Hint (H)"}
        </button>
        {showHint && (
          <div className="hint-container">
            <p className="hint-text">{question.hint}</p>
          </div>
        )}
        <div className="score-display">
          <div className="score-container">
            <img
              src="https://i.imgur.com/33ewecG.png"
              alt="Score"
              className="score-label"
            />
            <span className="score-value">{score}</span>
          </div>
          <div className="progress-indicator">
            Question {questionIndex + 1}/{questions.length}
          </div>
          <div className="high-score-indicator">High Score: {highScore}</div>
        </div>
        {feedback && (
          <div className="feedback-container">
            <img
              src={
                feedback === "correct"
                  ? "https://i.imgur.com/K3AhiZV.png"
                  : "https://i.imgur.com/6jHKei4.png"
              }
              alt={feedback === "correct" ? "Correct" : "Incorrect"}
              className="feedback-image"
            />
          </div>
        )}
        <div className="dialog-box">
          <p className="trainer-text">{`${level.trainer}: ${question.text}`}</p>
          <div className="options">
            {question.options.map((opt, i) => (
              <button
                key={i}
                className="option-button"
                onClick={() => {
                  handleUserInteraction();
                  handleAnswer(opt.charAt(0));
                }}
                disabled={feedback !== null}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="music-player">
          <span className="current-track">{currentTrack}</span>
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    );
  };

  const renderGameOver = () => (
    <div className="game-over-container">
      <img
        src="https://i.imgur.com/mJjhinM.gif"
        alt="Game Over"
        className="fullscreen"
      />
      <div className="game-over-options">
        <img
          src="https://i.imgur.com/H0fxnS1.png"
          alt="Retry"
          className="game-over-button"
          onClick={handleRetry}
        />
        <img
          src="https://i.imgur.com/24zRYZX.png"
          alt="Return to Map"
          className="game-over-button"
          onClick={() => setState(GAME_STATE.MAP)}
        />
      </div>
    </div>
  );

  const renderWin = () => (
    <div className="win-container">
      <img
        src="https://i.imgur.com/8hJdVBz.gif"
        alt="Win"
        className="fullscreen"
      />
      <div className="win-options">
        <button className="win-button" onClick={handleNextChapter}>
          Next Chapter
        </button>
        <button className="win-button" onClick={() => setState(GAME_STATE.MAP)}>
          Return to Map (Esc)
        </button>
      </div>
    </div>
  );

  return (
    <div className="border-overlay">
      <div className="App">
        <audio
          ref={titleMusicRef}
          src="https://store-screenapp-production.storage.googleapis.com/vid/67dcbec75f39f7e3a0277dbb/f9354e26-9771-4036-9a8e-e301c46c9e0b.mp3"
        />
        <audio
          ref={battleMusicRef}
          src="https://store-screenapp-production.storage.googleapis.com/vid/67dcbec75f39f7e3a0277dbb/becf2dbc-8abd-45de-9228-64ca3f5a4028.mp3"
        />
        <audio
          ref={loseMusicRef}
          src="https://store-screenapp-production.storage.googleapis.com/vid/67dcbec75f39f7e3a0277dbb/e69c3307-cf21-4947-b160-a44f097b449a.mp3"
        />
        {state === GAME_STATE.TITLE && renderTitle()}
        {state === GAME_STATE.MAP && renderMap()}
        {state === GAME_STATE.LEVEL && renderLevel()}
        {state === GAME_STATE.GAME_OVER && renderGameOver()}
        {state === GAME_STATE.WIN && renderWin()}
      </div>
    </div>
  );
};

export default App;
