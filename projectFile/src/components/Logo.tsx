import styles from "../style/Logo.module.css";

function Logo() {
  return (
    <h1 className={styles.wrapper}>
      <a href="#">
        <img
          className={styles.headerLogo}
          id="headerLogo"
          src="../public/Airbnb-Logo.png"
        ></img>
      </a>
    </h1>
  );
}

export default Logo;
