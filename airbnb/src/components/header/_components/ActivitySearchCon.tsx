import style from "../_styles/searchCon.module.css"


export default function ActivitySearchCon() {

  return (
    <>
      <div className={style.searchCon}>
        <div className={style.searchSectionFull}>
          <p className={style.searchNavTitle}>여행지</p>
          <input type="text" placeholder="여행지 검색" id="searchDestination" name="searchDestination" />
        </div>
        <div className={style.searchSectionFull}>
          <p className={style.searchNavTitle}>날짜</p>
          <p>날짜 추가</p>
        </div>
        <div className={style.searchSectionFull}>
          <p className={style.searchNavTitle}>여행자</p>
          <p>게스트 추가</p>
        </div>
        <button className={style.searchBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </>
  )
}