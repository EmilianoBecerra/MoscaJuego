/* import { useLogin } from "../hooks/useLogin";
import styles from "../Login.module.css";

const Login = () => {
  const { formData, error, handleChange, handleLogin, handleClickRegister } =
    useLogin();

  return (
    <div className={styles.login}>
      <section className={styles.introduccion}>
        <h2>Bienvenidos a La Mosca</h2>
        <p>El segundo juego de cartas argentino</p>
        <p className={styles.registrate}>Registrate y comenzá a jugar!!</p>
      </section>

      <form onSubmit={handleLogin} className={styles.formulario}>
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
          className={styles.input}
          required
          autoFocus
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          autoComplete="on"
          required
        />
        <p style={{ color: "rgba(255, 40, 40, 0.65)", fontSize: "10px" }}>
          {error}
        </p>
        <button type="submit" className={styles.btnForm}>
          Ingresar
        </button>
        <button
          type="button"
          onClick={handleClickRegister}
          className={styles.btnForm}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Login;
 */