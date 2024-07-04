import React from "react";
import { useState } from "react";
import {
  DEFAULT_BASE_CODE,
  DEFAULT_TARGET_CODE,
} from "./constants";
import  useExchangeRate  from "../hooks/useExchangeRate";

function App() {
  const [baseCode, setBaseCode] = useState(DEFAULT_BASE_CODE);
  const [targetCode, setTargetCode] = useState(DEFAULT_TARGET_CODE);
  const { conversionRate } = useExchangeRate({
    baseCode,
    targetCode,
  });
  return (
    <>
     <div className="container">
        <h1>Конвертер валют</h1>
    {DEFAULT_BASE_CODE}/{DEFAULT_TARGET_CODE} {conversionRate}
      </div>
    </>
  )
}

export default App
