import "./App.css";
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <h1>hello world!</h1>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
