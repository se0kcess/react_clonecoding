import { useState } from "react";
import style from "../_styles/searchCon.module.css"
import DestinationSearchMenu from "./DestinationSearchMenu";

export default function DormitorySearchCon() {
  const [openSearchDestination, setOpenSearchDestination] = useState(false);

  return (
    <>
      <div className={style.searchCon}>
        <div className={style.searchSection1} onClick={() => setOpenSearchDestination(!openSearchDestination)}>
          <p className={style.searchNavTitle}>여행지</p>
          <input
            type="text"
            placeholder="여행지 검색"
            id="searchDestination"
            name="searchDestination"
          />
        </div>
        <div className={style.searchSection2}>
          <p className={style.searchNavTitle}>체크인</p>
          <p>날짜 추가</p>
        </div>
        <div className={style.searchSection3}>
          <p className={style.searchNavTitle}>체크아웃</p>
          <p>날짜 추가</p>
        </div>
        <div className={style.searchSection4}>
          <p className={style.searchNavTitle}>여행자</p>
          <p>게스트 추가</p>
        </div>
        <button className={style.searchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {openSearchDestination && (
        <DestinationSearchMenu />
      )}
    </>
  );
}
