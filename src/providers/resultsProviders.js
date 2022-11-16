import { createContext, useState } from "react";

export const ResultsContext = createContext([]);

export const ResultsProviders = ({ children }) => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);

  return (
    <ResultsContext.Provider
      value={{ amount, setAmount, installments, setInstallments, mdr, setMdr }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
