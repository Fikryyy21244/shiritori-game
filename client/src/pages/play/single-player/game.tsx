import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CountStartGame from "../../../components/game/CountStartGame";
import TimerBar from "../../../components/common/TimerBar";
import wordsData from "../../../data/jlpt_vocab.json";
import GameOverModal from "../../../components/game/GameOverModal";
import * as wanakana from "wanakana";

export default function SoloGameSession() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isGameStart } = location.state || {};

  const [countStart, setCountStart] = useState(3);
  const [isCountdownDone, setIsCountdownDone] = useState(false);

  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);

  const [currentWord, setCurrentWord] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [usedWords, setUsedWords] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const normalize = (text: string) => {
    return wanakana.toHiragana(text).replace(/ー/g, "").trim();
  };

  useEffect(() => {
    if (!isGameStart) return;

    // START GAME
    const startGame = () => {
      const filteredWords = wordsData.filter((item) => {
        const word = normalize(item.kana);
        const lastChar = word.slice(-1);
        return lastChar !== "る" && lastChar !== "ん";
      });

      const randomWord =
        filteredWords[Math.floor(Math.random() * filteredWords.length)];

      if (randomWord) {
        setCurrentWord(randomWord.kana);
        setUsedWords([normalize(randomWord.kana)]);
      }

      setTimeout(() => inputRef.current?.focus(), 50);
    };

    const startTimer = setInterval(() => {
      setCountStart((prev) => {
        if (prev <= 1) {
          clearInterval(startTimer);

          setTimeout(() => {
            setIsCountdownDone(true);
            startGame();
          }, 500);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(startTimer);
  }, [isGameStart]);

  // TIMER GAME
  useEffect(() => {
    if (!isCountdownDone || isGameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isCountdownDone, isGameOver]);

  // SUBMIT
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!inputValue || isGameOver) return;

    const normalizedInput = normalize(inputValue);
    const normalizedCurrent = normalize(currentWord);

    const firstChar = normalizedInput[0];
    const lastChar = normalizedCurrent.slice(-1);

    if (firstChar !== lastChar) {
      alert(`Harus dimulai dengan "${lastChar}"`);
      return;
    }

    const isValid = wordsData.some(
      (item) => normalize(item.kana) === normalizedInput,
    );

    if (!isValid) {
      alert("Kata tidak ditemukan!");
      return;
    }

    if (usedWords.includes(normalizedInput)) {
      alert("Kata sudah dipakai!");
      return;
    }

    if (normalizedInput.endsWith("ん")) {
      setScore((prev) => prev + 10);
      setIsGameOver(true);
      alert("Game Over! Kata berakhir dengan ん");
      return;
    }

    setCurrentWord(inputValue);
    setUsedWords((prev) => [...prev, normalizedInput]);
    setScore((prev) => prev + 10);
    setTimeLeft(30);
    setInputValue("");

    setTimeout(() => inputRef.current?.focus(), 10);
  };

  useEffect(() => {
    if (isGameOver === true) {
      setTimeout(() => {
        navigate(`${location.pathname}/result`, {
          replace: true,
          state: {
            score,
            totalWordsAnswered: usedWords,
          },
        });
      }, 1500);
    }
  }, [isGameOver, navigate, location.pathname, score, usedWords]);

  return (
    <section style={{ padding: "2% 0" }}>
      {isGameStart && !isCountdownDone && <CountStartGame count={countStart} />}

      {isGameOver && <GameOverModal />}

      {isCountdownDone && (
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-4">
            <div className="px-6 py-2 bg-yellow-300 border-2 border-yellow-500 text-lg font-bold">
              {score}
            </div>

            <div className="px-6 py-2 bg-green-300 border-2 border-green-500 text-lg font-bold">
              {timeLeft}s
            </div>
          </div>

          {/* TIMER BAR */}
          <div className="px-4 mt-2">
            <TimerBar timeLeft={timeLeft} maxTime={30} />
          </div>

          {/* WORD */}
          <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-[40%] mt-10 text-center">
            <h2 className="text-8xl font-bold mt-2">
              {currentWord.slice(0, -1)}
              <span className="text-blue-500">{currentWord.slice(-1)}</span>
            </h2>
          </div>

          {/* INPUT */}
          <form
            onSubmit={handleSubmit}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ketik hiragana / katakana / romaji..."
              disabled={isGameOver}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl shadow-md focus:outline-none focus:border-blue-400 disabled:bg-gray-200"
            />
          </form>
        </div>
      )}
    </section>
  );
}
