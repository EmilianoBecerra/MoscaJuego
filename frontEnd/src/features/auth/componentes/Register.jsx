import styles from "../Register.module.css";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const { formData, handleSubmit, handleChange } = useRegister();

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
        <button className={styles.btnForm}> Registrarse </button>
      </form>
    </div>
  );
};

export default Register;
