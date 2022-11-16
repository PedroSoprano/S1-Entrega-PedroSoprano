import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import axios from "axios";
import { ResultsContext } from "../../providers/resultsProviders";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Amount is required")
      .min(1000)
      .typeError("Amount is required"),
    installments: yup
      .number()
      .max(12)
      .min(1)
      .required("Installments is required")
      .typeError("Installments is required"),
    mdr: yup.number().required("Mdr is required").typeError("Mdr is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { setOne, setFifteen, setThirty, setNinety } =
    useContext(ResultsContext);

  const onSubmit = (data) => {
    const id = toast.loading("Please wait...");

    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", data)
      .then((response) => {
        setOne(response.data[1]);
        setFifteen(response.data[15]);
        setThirty(response.data[30]);
        setNinety(response.data[90]);
        toast.update(id, {
          render: "Success",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      })
      .catch((error) =>
        toast.update(id, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: true,
        })
      );
  };

  return (
    <>
      <ToastContainer />
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="containerInput">
          {errors.amount ? (
            <span className="errorMessage">{errors.amount.message}</span>
          ) : (
            <label>Informe o valor da venda *</label>
          )}
          <input
            placeholder="Valor da venda"
            type={"number"}
            {...register("amount")}
            className={errors.amount ? "errorInput" : ""}
          />
        </div>
        <div className="containerInput">
          {errors.installments ? (
            <span className="errorMessage">{errors.installments.message}</span>
          ) : (
            <label>Em quantas parcelas *</label>
          )}
          <input
            placeholder="Parcelas"
            {...register("installments")}
            type={"number"}
            className={errors.installments ? "errorInput" : ""}
          />
          <p className="detail">Máximo de 12 parcelas</p>
        </div>
        <div className="containerInput">
          {errors.mdr ? (
            <span className="errorMessage">{errors.mdr.message}</span>
          ) : (
            <label>Informe o percentual de MDR *</label>
          )}
          <input
            type={"number"}
            placeholder="Percentual MDR"
            {...register("mdr")}
            className={errors.mdr ? "errorInput" : ""}
          />
        </div>
        <button type="submit">Calcular</button>
      </form>
    </>
  );
};
