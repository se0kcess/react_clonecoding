import { useState } from "react";
import HeaderM1 from "../HeaderM1/HeaderM1";
import styles from "./HeaderBottom.module.css";
import HeaderM2 from "../HeaderM2/HeaderM2";
import HeaderM3 from "../HeaderM3/HeaderM3";

export default function HeaderBottom() {
  const [activeModal, setActiveModal] = useState<number>(0);
  // const [modal1, setModal1] = useState<boolean>(false);

  return (
    <>
      <section className={styles.headerBottom}>
        <nav className={styles.navWrap}>
          <div
            className={styles.Btn}
            onClick={() => {
              if (activeModal === 1) setActiveModal(0);
              else setActiveModal(1);
            }}
          >
            <h2>여행지</h2>
            <input placeholder="여행지 검색" />
          </div>
          {activeModal === 1 ? <HeaderM1 /> : ""}

          <div
            className={styles.Btn}
            onClick={() => {
              if (activeModal === 2) setActiveModal(0);
              else setActiveModal(2);
            }}
          >
            <h2>체크인</h2>
            <p>날짜 추가</p>
          </div>
          {activeModal === 2 || activeModal === 3 ? <HeaderM2 /> : ""}

          <div
            className={styles.Btn}
            onClick={() => {
              if (activeModal === 3) setActiveModal(0);
              else setActiveModal(3);
            }}
          >
            <h2>체크아웃</h2>
            <p>날짜 추가</p>
          </div>

          <div
            className={styles.Btn}
            onClick={() => {
              if (activeModal === 4) setActiveModal(0);
              else setActiveModal(4);
            }}
          >
            <h2>여행자</h2>
            <p>게스트 추가</p>
          </div>
          {activeModal === 4 ? <HeaderM3 /> : ""}

          {/* <!-- <button className={styles.search Btn">
        <i className={styles.fa-solid {styles.a-search" style="font-size: 1rem"></i>
      </button> --> */}
        </nav>
      </section>
    </>
  );
}
