import { useContext } from "react";
import { ResultsContext } from "../../providers/resultsProviders";
import "./style.css";

export const Results = () => {
  const { one, fifteen, thirty, ninety } = useContext(ResultsContext);

  return (
    <>
      <h2 className="titleResult">VOCÊ RECEBERÁ:</h2>
      <div className="containerResults">
        <div className="containerValue">
          <p className="description">
            Amanhã: <span className="value">R$ {parseFloat(one)}</span>
          </p>
        </div>
        <div className="containerValue">
          <p className="description">
            Em 15 dias: <span className="value">R$ {fifteen}</span>
          </p>
        </div>
        <div className="containerValue">
          <p className="description">
            Em 30 dias: <span className="value">R$ {thirty}</span>
          </p>
        </div>
        <div className="containerValue">
          <p className="description">
            Em 90 dias: <span className="value">R$ {ninety}</span>
          </p>
        </div>
      </div>
    </>
  );
};
