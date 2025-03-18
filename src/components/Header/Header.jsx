import React from "react";
import Button from "../Button/Button";
import { useTelegramBot } from "../../hooks/useTelegram";

const Header = (props) => {
  const { tg, onClose } = useTelegramBot();

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
