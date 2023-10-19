import { useState } from "react";
import numberInputValidation from "../helpers/numberInputValidation";
import stringInputValidation from "../helpers/stringInputValidation";
import WarningComponent from "../WarningComponent/WarningComponent";
import addExpense from "../helpers/addExpense";
import "./MainForm.css"

const MainForm = () => {

  const [warningMessage, setWarningMessage] = useState('');

  return (
    <div>
      <form className="main-section-form">
        <div>
          <p>Куда было потрачено:</p>
          <input type="text" name="whereSpent" onChange={(e) => { stringInputValidation(e, setWarningMessage) }} placeholder="Куда было потрачено" />
        </div>
        <div>
          <p>Сколько было потрачено:</p>
          <input type="number" name="howMuch" onChange={(e) => { numberInputValidation(e, setWarningMessage) }} placeholder="Сколько было потрачено" />
        </div>
        <button type="button" onClick={addExpense}>Добавить</button>
      </form> 
      <WarningComponent message={warningMessage}/>
    </div>
  )
}

export default MainForm;