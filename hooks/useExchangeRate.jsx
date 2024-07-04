import React from "react";
import { useEffect, useCallback, useState  } from "react";

export default function useExchangeRate({baseCode, targetCode}) {
    const [conversionRate, setConversionRate] = useState(null);

    const getConversionRate = async () => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/${
              import.meta.env.VITE_API_KEY
            }/pair/${baseCode}/${targetCode}`
          );
          const data = await res.json();
          console.log(data.conversion_rate);
          setConversionRate(data.conversion_rate);
        } catch (error) {
          
        } finally {
         
        }
      }
    
     
    
      useEffect(() => {
        getConversionRate();
      }, [getConversionRate]);
    
      return {
        conversionRate
      };
}