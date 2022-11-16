import { Form } from "../form";
import { Results } from "../results";
import "./style.css";

export const Box = () => {
  return (
    <div className="containerPrincipal">
      <div className="containerForm">
        <Form />
      </div>
      <div className="containerSide">
        <Results />
      </div>
    </div>
  );
};
