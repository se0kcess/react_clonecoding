import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderMobile.module.css";
import { faSearch, faSliders } from "@fortawesome/free-solid-svg-icons";

export default function HeaderMobile() {
  return (
    <>
      <section className={styles.headerMobile}>
        <div>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem" }} />
          <h2>어디로 여행가세요?</h2>
          <p>어디든지 | 언제든 일주일 | 게스트 추가</p>
        </div>
        <button>
          <FontAwesomeIcon icon={faSliders} style={{ fontSize: "1rem" }} />
        </button>
      </section>
    </>
  );
}
