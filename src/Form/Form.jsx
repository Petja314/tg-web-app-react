import React, { useEffect } from "react";
import "./Form.css";
import { useTelegramBot } from "../hooks/useTelegram";

const Form = ({ className }) => {
  const [country, setCountry] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [subject, setSubject] = React.useState("physical");
  const { tg } = useTelegramBot();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, [tg]);

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  return (
    <div className={className}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Страна"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Улица"}
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      {/*<input className={"input"} type="text" placeholder={""} />*/}
      <select
        className={"select"}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      >
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
