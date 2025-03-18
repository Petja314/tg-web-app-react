import "./App.css";
import { useEffect } from "react";
import { useTelegramBot } from "./hooks/useTelegram";

function App() {
  const { tg, user, onClose, onToggleButton } = useTelegramBot();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
