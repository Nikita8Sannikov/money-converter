import React from "react";
import { useState } from "react";
import {
  DEFAULT_BASE_CODE,
  DEFAULT_TARGET_CODE,
  CODES
} from "./constants";
import  useExchangeRate  from "../hooks/useExchangeRate";
import CurretnRow from "./components/CurrentRow";

function App() {
  const [baseCode, setBaseCode] = useState(DEFAULT_BASE_CODE);
  const [targetCode, setTargetCode] = useState(DEFAULT_TARGET_CODE);
  const [baseValue, setbaseValue] = useState('')
  const [targetValue, setTargetValue] = useState('')
  const { conversionRate } = useExchangeRate({
    baseCode,
    targetCode,
  });

  function onBaseValueChange(event) {
    setbaseValue(event.target.value)
  }
  function onTargetValueChange(event) {
    setTargetValue(event.target.value)
  }

  function onBaseCodeChange(value) {
    setBaseCode(value)
  }
  function onTargetCodeChange(value) {
    setTargetCode(value)
  }
  return (
    <>
     <div className="container">
        <h1>Конвертер валют</h1>

    <CurretnRow
    inputValue={baseValue}
    onInputChange={onBaseValueChange}
    onSelectChange={onBaseCodeChange}
    />
    <CurretnRow
    inputValue={targetValue}
    onInputChange={onTargetValueChange}
    onSelectChange={onTargetCodeChange}
    />
    
    {baseCode}/{targetCode} {conversionRate}
      </div>
    </>
  )
}

export default App
