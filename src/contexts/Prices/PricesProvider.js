import React, { useState, useEffect, useCallback } from 'react';
import usePayr from '../../hooks/usePayr';
import { getFarms } from '../../contracts/utils';
import { getPriceByContract } from "../../contracts/utils";
import PricesContext from './PricesContext';

const PricesProvider = ({ children }) => {
  const [unharvested] = useState(0);
  const [kawaPrice, setKawaPrice] = useState(0);
  const payr = usePayr();
  const farms = getFarms(payr);

  const fetchCurrentPrice = useCallback(async () => {
    
    const price = await getPriceByContract("0x17a4ae8b1ea75d51ab0f2875b80452f7e34c272a");
    setKawaPrice(price);
  }, [setKawaPrice]);

  useEffect(() => {
    fetchCurrentPrice();
    let refreshInterval = setInterval(fetchCurrentPrice, 1000);
    return () => clearInterval(refreshInterval);
  }, [fetchCurrentPrice]);

  return (
    <PricesContext.Provider
      value={{
        kawaPrice
      }}
    >
      {children}
    </PricesContext.Provider>
  )
}

export default PricesProvider;
