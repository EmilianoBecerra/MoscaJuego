import styles from "../Register.module.css";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const {
    formData,
    handleSubmit,
    handleChange,
    respuesta,
    isLoading,
    isError,
  } = useRegister();
  console.log(isError);
  return (
    <div className={styles.registrarse}>
      <section className={styles.introduccion}>
        <h2>Registrate</h2>
        <p>Ingresa un usuario y contraseña para comenzar a disfrutar!</p>
      </section>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          id="username"
          placeholder="Usuario"
          className={styles.input}
          required
        />
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          id="correo"
          placeholder="Correo Electrónico"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          autoComplete="on"
          value={formData.password}
          onChange={handleChange}
          id="password"
          placeholder="Contraseña"
          className={styles.input}
          required
        />
        <button disabled={isLoading} className={styles.btnForm}>
          Registrarse
        </button>
        <p
          style={{ color: respuesta?.response?.data?.error ? "red" : "green" }}
        >
          {respuesta?.response?.data?.error
            ? respuesta?.response?.data?.error
            : respuesta?.mensaje}
        </p>
      </form>
    </div>
  );
};

export default Register;
