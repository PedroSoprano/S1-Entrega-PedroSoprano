import { createContext, useState } from "react";

export const ResultsContext = createContext([]);

export const ResultsProviders = ({ children }) => {
  const [one, setOne] = useState(0);
  const [fifteen, setFifteen] = useState(0);
  const [thirty, setThirty] = useState(0);
  const [ninety, setNinety] = useState(0);

  return (
    <ResultsContext.Provider
      value={{
        one,
        setOne,
        fifteen,
        setFifteen,
        thirty,
        setThirty,
        ninety,
        setNinety,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
