import { RefObject } from "react";
import styles from "../style/PlaceBox.module.css";

interface PlaceBoxProps {
  searchPlaceState: boolean;
  inputRef: RefObject<HTMLInputElement>;
  fetchedCityList: string[];
}

const PlaceBox: React.FC<PlaceBoxProps> = ({
  searchPlaceState,
  inputRef,
  fetchedCityList,
}) => {
  return (
    <div
      className={`${styles.wrapper}
    ${searchPlaceState === true ? styles.active : ""}`}
      onClick={() => {}}
    >
      <section>
        <h2>지역으로 검색하기</h2>
        <ul className={styles.listOne}>
          <li>
            <div></div>
            <p>유연한검색</p>
          </li>
          <li>
            <div></div>
            <p>유럽</p>
          </li>
          <li>
            <div></div>
            <p>일본</p>
          </li>
          <li>
            <div></div>
            <p>동남아시아</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>한국</h2>
        <ul className={styles.listTwo}>
          {fetchedCityList.map((item) => {
            return (
              <li
                key={item}
                className={styles.listTwoItem}
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = item;
                  }
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </section>
      <section></section>
    </div>
  );
};

export default PlaceBox;
