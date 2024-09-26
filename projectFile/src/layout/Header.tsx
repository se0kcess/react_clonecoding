import { useState } from "react";
import HeaderMain from "../components/HeaderMain.tsx";
import HeaderSearch from "../components/HeaderSearch.tsx";
import styles from "../style/Header.module.css";

interface HeaderProps {
  fetchedCityList: string[];
}

const Header: React.FC<HeaderProps> = ({ fetchedCityList }) => {
  const [searchState, setSearchState] = useState("숙소");

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderMain
          searchState={searchState}
          setSearchState={setSearchState}
        ></HeaderMain>
        <HeaderSearch
          searchState={searchState}
          fetchedCityList={fetchedCityList}
        ></HeaderSearch>
      </div>
    </div>
  );
};

export default Header;
