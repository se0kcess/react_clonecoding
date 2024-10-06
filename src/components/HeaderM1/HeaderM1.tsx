import styles from "./HeaderM1.module.css";

export default function HeaderM1() {
  return (
    <div className={styles.modal1}>
      <label htmlFor="selectMap">지역으로 검색하기</label>
      <div id={styles.selectMap}>
        <div>
          <img src="/world-map.jpg" alt="noimage" />
          <i>유연한 검색</i>
        </div>
        <div>
          <img src="/europe-map.webp" alt="noimage" />
          <i>유럽</i>
        </div>
        <div>
          <img src="/japan-map.webp" alt="noimage" />
          <i>일본</i>
        </div>
        <div>
          <img src="/southEastAsia-map.webp" alt="noimage" />
          <i>동남아시아</i>
        </div>
      </div>

      <label htmlFor="selectMap">한국</label>
      <div id={styles.selectKor}>
        <button>서울</button>
        <button>부산</button>
        <button>속초</button>
        <button>강릉</button>
        <button>전주</button>
        <button>대구</button>
        <button>경주</button>
        <button>여수</button>
        <button>서귀포</button>
        <button>대전</button>
        <button>제주도</button>
        <button>인천</button>
      </div>
    </div>
  );
}
