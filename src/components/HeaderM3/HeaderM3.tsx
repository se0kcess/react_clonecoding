import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HeaderM3.module.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function HeaderM3() {
  const [guestCount, setGuestCount] = useState<number[]>([0, 0, 0, 0]);
  const minusGuestNum = (id: number) => {
    setGuestCount((prev) => {
      const tmp = [...prev];
      if (tmp[id]) tmp[id]--;
      return tmp;
    });
  };
  const addGuestNum = (id: number) => {
    setGuestCount((prev) => {
      const tmp = [...prev];
      tmp[id]++;
      return tmp;
    });
  };

  return (
    <div className={styles.modal3}>
      <div className={styles.adult}>
        <div className={styles.tagWrap}>
          <p>성인</p>
          <i>13세 이상</i>
        </div>
        <div className={styles.counterWrap}>
          <FontAwesomeIcon
            icon={faMinus}
            className={`${styles.minusBtn} ${
              guestCount[0] ? "" : styles.disabled
            }`}
            onClick={() => minusGuestNum(0)}
          />
          <p>{guestCount[0]}</p>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.plusBtn}
            onClick={() => addGuestNum(0)}
          />
        </div>
      </div>

      <div className={styles.children}>
        <div className={styles.tagWrap}>
          <p>어린이</p>
          <i>2~12세</i>
        </div>
        <div className={styles.counterWrap}>
          <FontAwesomeIcon
            icon={faMinus}
            className={`${styles.minusBtn} ${
              guestCount[1] ? "" : styles.disabled
            }`}
            onClick={() => minusGuestNum(1)}
          />
          <p>{guestCount[1]}</p>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.plusBtn}
            onClick={() => addGuestNum(1)}
          />
        </div>
      </div>

      <div className={styles.baby}>
        <div className={styles.tagWrap}>
          <p>유아</p>
          <i>2세 미만</i>
        </div>
        <div className={styles.counterWrap}>
          <FontAwesomeIcon
            icon={faMinus}
            className={`${styles.minusBtn} ${
              guestCount[2] ? "" : styles.disabled
            }`}
            onClick={() => minusGuestNum(2)}
          />
          <p>{guestCount[2]}</p>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.plusBtn}
            onClick={() => addGuestNum(2)}
          />
        </div>
      </div>

      <div className={styles.pets}>
        <div className={styles.tagWrap}>
          <p>반려동물</p>
          <i>보조동물을 동반하시나요?</i>
        </div>
        <div className={styles.counterWrap}>
          <FontAwesomeIcon
            icon={faMinus}
            className={`${styles.minusBtn} ${
              guestCount[3] ? "" : styles.disabled
            }`}
            onClick={() => minusGuestNum(3)}
          />
          <p>{guestCount[3]}</p>
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.plusBtn}
            onClick={() => addGuestNum(3)}
          />
        </div>
      </div>
    </div>
  );
}
