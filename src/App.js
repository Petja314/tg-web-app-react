import "./App.css";
import { useEffect } from "react";
import { useTelegramBot } from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegramBot();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header></Header>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
