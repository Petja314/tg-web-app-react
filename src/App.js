import "./App.css";
import { useEffect } from "react";
import { useTelegramBot } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";

function App() {
  const { tg } = useTelegramBot();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"/form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
