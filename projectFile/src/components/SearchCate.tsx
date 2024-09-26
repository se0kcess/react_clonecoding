import styles from "../style/SearchCate.module.css";
import { Dispatch, SetStateAction } from "react";

interface SearchCateProps {
  searchState: string;
  setSearchState: Dispatch<SetStateAction<string>>;
}

const SearchCate: React.FC<SearchCateProps> = ({
  searchState,
  setSearchState,
}) => {
  return (
    <div className={styles.headerCateWrapper}>
      <div
        className={
          searchState === "숙소"
            ? `${styles.headerCateItem} ${styles.active}`
            : styles.headerCateItem
        }
        onClick={() => {
          setSearchState("숙소");
        }}
      >
        <p>숙소</p>
      </div>
      <div
        className={
          searchState === "체험"
            ? `${styles.headerCateItem} ${styles.active}`
            : styles.headerCateItem
        }
        onClick={() => {
          setSearchState("체험");
        }}
      >
        <p>체험</p>
      </div>
    </div>
  );
};

export default SearchCate;
