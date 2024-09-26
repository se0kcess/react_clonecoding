import styles from "../style/PopulationItem.module.css";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import PopulationBox from "./PopulationBox.tsx";

interface PopulationItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const PopulationItem: React.FC<PopulationItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [PopulationItemState, setPopulationItemState] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (liRef.current && !liRef.current.contains(event.target as Node)) {
        setactiveState(false);
        setPopulationItemState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      ref={liRef}
      className={`
      ${styles.itemContainer} 
      ${searchState === "체험" ? styles.visible : ""} 
      ${PopulationItemState === true ? styles.active : ""}
    `}
      onClick={(e) => {
        e.preventDefault();
        setactiveState(true);
        setPopulationItemState(true);
      }}
    >
      <p>여행자</p>
      <p ref={pRef}>게스트 추가</p>
      <PopulationBox
        PopulationItemState={PopulationItemState}
        pRef={pRef}
        searchState={searchState}
      ></PopulationBox>
    </li>
  );
};

export default PopulationItem;
