import styles from "./HeaderTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBars,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderTop() {
  return (
    <>
      <section className={styles.headerTop}>
        <h1 className={styles.logo}>
          <img src="/airbnb-svgrepo-com.svg" alt="logo" />
        </h1>
        <nav className={styles.midNavWrap}>
          <i className={`${styles.Btn} ${styles.active}`}>숙소</i>
          <i className={styles.Btn}>체험</i>
        </nav>
        <nav className={styles.endNavWrap}>
          <i className={styles.Btn}>당신의 공간을 에어비앤비하세요</i>

          <button className={`${styles.Btn} ${styles.language}`}>
            <FontAwesomeIcon icon={faGlobe} />
          </button>
          <button className={`${styles.Btn} ${styles.profile}`}>
            <FontAwesomeIcon icon={faBars} style={{ marginRight: "0.8rem" }} />
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ fontSize: "1.8rem" }}
            />
          </button>
        </nav>
      </section>
    </>
  );
}
