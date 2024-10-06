import Calender from "../Calender/Calender";
import styles from "./HeaderM2.module.css";

export default function HeaderM2() {
  return (
    <div className={styles.modal2}>
      <div className={styles.selectBar}>
        <div className={styles.wrapper}>
          <div className={`${styles.Btn} ${styles.active}`}>날짜 지정</div>
          <div className={styles.Btn}>월 단위</div>
          <div className={styles.Btn}>유연한 일정</div>
        </div>
      </div>
      <div className={styles.calenderWrap}>
        <Calender monthOffset={0} />
        <Calender monthOffset={1} />
      </div>
    </div>
  );
}
