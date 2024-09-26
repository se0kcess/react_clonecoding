import styles from "../style/SearchBoxItem.module.css";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import AcomDateBox from "./AcomDateBox.tsx";

interface SearchBoxItemProps {
  searchState: string;
  setactiveState: Dispatch<SetStateAction<boolean>>;
}

const SearchBoxItem: React.FC<SearchBoxItemProps> = ({
  searchState,
  setactiveState,
}) => {
  const [SearchBoxItemState, setSearchBoxItemState] = useState(false);
  const liRef = useRef<HTMLLIElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (liRef.current && !liRef.current.contains(event.target as Node)) {
        setactiveState(false);
        setSearchBoxItemState(false);
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
      ${SearchBoxItemState === true ? styles.active : ""}
    `}
      onClick={(e) => {
        e.preventDefault();
        setactiveState(true);
        setSearchBoxItemState(true);
      }}
    >
      <p>체크인</p>
      <p ref={pRef}>날짜 추가</p>
      <AcomDateBox
        SearchBoxItemState={SearchBoxItemState}
        pRef={pRef}
      ></AcomDateBox>
    </li>
  );
};

export default SearchBoxItem;
