import React from "react";
import { useEffect, useCallback, useState  } from "react";

export default function useExchangeRate({baseCode, targetCode}) {
    const [conversionRate, setConversionRate] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsloading] = useState(false);
    const getConversionRate = useCallback(async () => {
        try {
          setIsloading(true)
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/${
              import.meta.env.VITE_API_KEY
            }/pair/${baseCode}/${targetCode}`
          );
          const data = await res.json();
          console.log(data.conversion_rate);
          setConversionRate(data.conversion_rate);
        } catch (error) {
          setError(error.message)
        } finally {
          setIsloading(false)
        }
      }, [baseCode, targetCode, setError, setIsloading])
    
     
      useEffect(() => {
        getConversionRate()
        console.log('render');
      }, [getConversionRate]);
    
      return {
        conversionRate,
        error,
        isLoading
      };
}