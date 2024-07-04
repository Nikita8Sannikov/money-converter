import React, { useEffect } from "react";
import { useState } from "react";
import {
  DEFAULT_BASE_CODE,
  DEFAULT_TARGET_CODE,
  DEFAULT_BASE_VALUE,
  DEFAULT_TARGET_VALUE,
  DEFAULT_TO_FIXED
} from "./constants";
import  useExchangeRate  from "../hooks/useExchangeRate";
import CurretnRow from "./components/CurrentRow";

function App() {
  const [baseCode, setBaseCode] = useState(DEFAULT_BASE_CODE);
  const [targetCode, setTargetCode] = useState(DEFAULT_TARGET_CODE);
  const [baseValue, setBaseValue] = useState(DEFAULT_BASE_VALUE)
  const [targetValue, setTargetValue] = useState(DEFAULT_TARGET_VALUE)
  const { conversionRate } = useExchangeRate({
    baseCode,
    targetCode,
  });

  function onBaseValueChange(event) {
    const value = Number(event.target.value)
    setBaseValue(value)
    const targetValue =
      value && conversionRate
        ? (value * conversionRate).toFixed(DEFAULT_TO_FIXED)
        : null
    setTargetValue(targetValue)
  }
  function onTargetValueChange(event) {
    const value = Number(event.target.value)
    setTargetValue(value)
    const baseValue =
      value && conversionRate
        ? (value / conversionRate).toFixed(DEFAULT_TO_FIXED)
        : null
    setBaseValue(baseValue)
  }

  function onBaseCodeChange(value) {
    setDefaultValues()
    setBaseCode(value)
  }
  function onTargetCodeChange(value) {
    setDefaultValues()
    setTargetCode(value)
  }
  function setDefaultValues(){
    setBaseValue(DEFAULT_BASE_VALUE)
    setTargetValue(DEFAULT_TARGET_VALUE)
  }

  useEffect(()=>{
    if(conversionRate){
      setTargetValue((baseValue*conversionRate)
      .toFixed(DEFAULT_TO_FIXED)
    )
    }
  }, [conversionRate])
 
  return (
    <>
     <div className="container">
        <h1>Конвертер валют</h1>

    <CurretnRow
    inputValue={baseValue}
    selectedValue={baseCode}
    onInputChange={onBaseValueChange}
    onSelectChange={onBaseCodeChange}
    />
    <CurretnRow
    inputValue={targetValue}
    selectedValue={targetCode}
    onInputChange={onTargetValueChange}
    onSelectChange={onTargetCodeChange}
    />
    
    {baseCode}/{targetCode} {conversionRate}
      </div>
    </>
  )
}

export default App
