import SearchBoxItem from "./SearchBoxItem.tsx";
import PopulationItem from "./PopulationItem.tsx";
import SearchPlaceItem from "./SearchPlaceItem.tsx";
import SearchDateItem from "./SearchDateItem.tsx";
import styles from "../style/HeaderSearch.module.css";
import { useState } from "react";

interface SearchCateProps {
  searchState: string;
  fetchedCityList: string[];
}

const HeaderSearch: React.FC<SearchCateProps> = ({
  searchState,
  fetchedCityList,
}) => {
  const [activeState, setactiveState] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={
          activeState === true
            ? `${styles.searchBox} ${styles.active}`
            : styles.searchBox
        }
      >
        <ul className={styles.searchBoxUl}>
          <SearchPlaceItem
            setactiveState={setactiveState}
            fetchedCityList={fetchedCityList}
          ></SearchPlaceItem>
          <SearchBoxItem
            searchState={searchState}
            setactiveState={setactiveState}
          ></SearchBoxItem>
          <SearchBoxItem
            searchState={searchState}
            setactiveState={setactiveState}
          ></SearchBoxItem>
          <SearchDateItem
            searchState={searchState}
            setactiveState={setactiveState}
          ></SearchDateItem>
          <PopulationItem
            searchState={searchState}
            setactiveState={setactiveState}
          ></PopulationItem>
        </ul>
        <button
          className={`
            ${styles.searchButton} 
            ${activeState === true ? styles.active : ""}
          `}
        >
          <img
            src="../../public/search.png"
            className={styles.searchButtonSpan}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
