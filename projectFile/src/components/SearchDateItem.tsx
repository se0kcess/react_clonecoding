import styles from "../style/SearchDateItem.module.css";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import AcomDateBox from "./AcomDateBox.tsx";

interface SearchDateItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const SearchDateItem: React.FC<SearchDateItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [SearchDateItemState, setSearchDateItemState] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (liRef.current && !liRef.current.contains(event.target as Node)) {
        setactiveState(false);
        setSearchDateItemState(false);
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
      ${searchState === "숙소" ? styles.visible : ""} 
      ${SearchDateItemState === true ? styles.active : ""}
    `}
      onClick={(e) => {
        e.preventDefault();
        setactiveState(true);
        setSearchDateItemState(true);
      }}
    >
      <p>날짜</p>
      <p ref={pRef}>날짜 추가</p>
      <AcomDateBox
        SearchDateItemState={SearchDateItemState}
        pRef={pRef}
      ></AcomDateBox>
    </li>
  );
};

export default SearchDateItem;
