import { Form } from "../form";
import "./style.css";

export const Box = () => {
  return (
    <div className="containerPrincipal">
      <div className="containerForm">
        <Form />
      </div>
      <div className="containerSide"></div>
    </div>
  );
};
