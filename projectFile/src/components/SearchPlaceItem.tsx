import styles from "../style/SearchPlaceItem.module.css";
import { Dispatch, SetStateAction, useState, useRef } from "react";
import PlaceBox from "./PlaceBox.tsx";

interface SearchPlaceItemProps {
  setactiveState: Dispatch<SetStateAction<boolean>>;
  fetchedCityList: string[];
}

const SearchPlaceItem: React.FC<SearchPlaceItemProps> = ({
  setactiveState,
  fetchedCityList,
}) => {
  const [searchPlaceState, setSearchPlaceState] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li
      className={
        searchPlaceState === true
          ? `${styles.itemContainer} ${styles.active}`
          : styles.itemContainer
      }
      onClick={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <p>여행지</p>
      <input
        type="text"
        placeholder="여행지 검색"
        ref={inputRef}
        onFocus={() => {
          setactiveState(true);
          setSearchPlaceState(true);
        }}
        onBlur={() => {
          setactiveState(false);
          setSearchPlaceState(false);
        }}
      ></input>
      <PlaceBox
        searchPlaceState={searchPlaceState}
        inputRef={inputRef}
        fetchedCityList={fetchedCityList}
      ></PlaceBox>
    </li>
  );
};

export default SearchPlaceItem;
