import { RefObject, useEffect, useState } from "react";
import styles from "../style/PopulationBox.module.css";

interface PopulationBoxProps {
  PopulationItemState: boolean;
  pRef: RefObject<HTMLParagraphElement>;
  searchState: string;
}

const PopulationBox: React.FC<PopulationBoxProps> = ({
  PopulationItemState,
  pRef,
  searchState,
}) => {
  const [adultState, setAdultState] = useState(0);
  const [kidState, setKidState] = useState(0);
  const [babyState, setBabyState] = useState(0);
  const [animalState, setAnimalState] = useState(0);

  const populationState = adultState + kidState + babyState + animalState;

  useEffect(() => {
    return () => {
      setAdultState(0);
      setKidState(0);
      setBabyState(0);
      setAnimalState(0);
    };
  }, [searchState]);

  if (pRef.current && populationState > 0) {
    pRef.current.innerText = `게스트 ${String(populationState)} 명`;
  } else if (pRef.current && populationState === 0) {
    pRef.current.innerText = "게스트 추가";
  }

  return (
    <div
      className={`${styles.wrapper}
${PopulationItemState === true ? styles.active : ""}`}
    >
      <section className={`${styles.adult} ${styles.adjust}`}>
        <div>
          <p>성인</p>
          <p>13세 이상</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (adultState > 0) {
                setAdultState((a) => a - 1);
              }
            }}
          >
            -
          </button>
          <span>{adultState}</span>
          <button
            onClick={() => {
              setAdultState((a) => a + 1);
            }}
          >
            +
          </button>
        </div>
      </section>
      <section className={`${styles.kid} ${styles.adjust}`}>
        <div>
          <p>어린이</p>
          <p>2~12세</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (kidState > 0) {
                setKidState((a) => a - 1);
              }
            }}
          >
            -
          </button>
          <span>{kidState}</span>
          <button
            onClick={() => {
              setKidState((a) => a + 1);
            }}
          >
            +
          </button>
        </div>
      </section>
      <section className={`${styles.baby} ${styles.adjust}`}>
        <div>
          <p>유아</p>
          <p>2세 미만</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (babyState > 0) {
                setBabyState((a) => a - 1);
              }
            }}
          >
            -
          </button>
          <span>{babyState}</span>
          <button
            onClick={() => {
              setBabyState((a) => a + 1);
            }}
          >
            +
          </button>
        </div>
      </section>
      <section
        className={`${styles.animal} ${styles.adjust} ${
          searchState === "체험" ? styles.invisible : ""
        }`}
      >
        <div>
          <p>반려동물</p>
          <p>보조동물을 동반하시나요?</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (animalState > 0) {
                setAnimalState((a) => a - 1);
              }
            }}
          >
            -
          </button>
          <span>{animalState}</span>
          <button
            onClick={() => {
              setAnimalState((a) => a + 1);
            }}
          >
            +
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopulationBox;
