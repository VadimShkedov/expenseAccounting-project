import { useState } from "react";
import formHandler from "./formHandler";
import WarningComponent from "../WarningComponent/WarningComponent";
import "./MainForm.css"

const MainForm = () => {

  const [warningMessage, setWarningMessage] = useState('');

  return (
    <div>
      <form className="main-section-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" placeholder="Сколько было потрачено" />
        </div>
        <button onClick={(e) => formHandler(e, setWarningMessage)} type="button">Добавить</button>
      </form>
      <WarningComponent message={warningMessage}/>
    </div>
  )
}

export default MainForm;