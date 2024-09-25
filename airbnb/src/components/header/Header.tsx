import { useState } from "react";
import style from "./_styles/header.module.css"
import DormitorySearchCon from "./_components/DormitorySearchCon";
import ActivitySearchCon from "./_components/ActivitySearchCon";
import NavCon from "./_components/NavCon";


export default function Header() {
  const [selectCategory, setSelectCategory] = useState('숙소');

  return (
    <header className={style.Header}>
      <div className={style.headerWrap}>
        <NavCon setSelectCategory={setSelectCategory} />
        {selectCategory === '숙소' ? (
          <DormitorySearchCon />
        ) : (
          <ActivitySearchCon />
        )}
      </div>
    </header>
  );
}
