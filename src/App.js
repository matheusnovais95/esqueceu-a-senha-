import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
     
      <div className="container-form">
      <div className="background-top" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-form-title">
            <h2>Esqueceu a senha?</h2>
            <p>
              Por favor, digite seu e-mail abaixo. Nele, voce receberá uma senha
              provisória.
            </p>
          </div>
          <div className="container-form-input">
           
            <input
              type="email"
              name="input-email"
              className="input-email-form"
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span className="msg-error">Campo obrigatório</span>
            )}
            <button className="btn-confirm">enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
