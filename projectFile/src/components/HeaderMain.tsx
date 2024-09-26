import Logo from "./Logo.tsx";
import SearchCate from "./SearchCate.tsx";
import HeaderMenu from "./HeaderMenu.tsx";
import styles from "../style/HeaderMain.module.css";
import { Dispatch, SetStateAction } from "react";

interface HeaderMainProps {
  searchState: string;
  setSearchState: Dispatch<SetStateAction<string>>;
}

const HeaderMain: React.FC<HeaderMainProps> = ({
  searchState,
  setSearchState,
}) => {
  return (
    <div className={styles.wrapper}>
      <Logo></Logo>
      <SearchCate
        searchState={searchState}
        setSearchState={setSearchState}
      ></SearchCate>
      <HeaderMenu></HeaderMenu>
    </div>
  );
};

export default HeaderMain;
