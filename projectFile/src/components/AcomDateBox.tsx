import { RefObject } from "react";
import styles from "../style/AcomDateBox.module.css";

interface AcomDateBoxProps {
  SearchBoxItemState?: boolean;
  SearchDateItemState?: boolean;
  pRef: RefObject<HTMLParagraphElement>;
}

const AcomDateBox: React.FC<AcomDateBoxProps> = ({
  SearchDateItemState,
  SearchBoxItemState,
  pRef,
}) => {
  return (
    <div
      className={`${styles.wrapper}
    ${
      SearchBoxItemState === true || SearchDateItemState === true
        ? styles.active
        : ""
    }`}
    >
      <div className={styles.calContainer}>
        <section className={styles.calOne}></section>
        <section className={styles.calTwo}></section>
      </div>
    </div>
  );
};

export default AcomDateBox;
