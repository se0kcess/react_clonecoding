import { Link } from "react-router-dom";
import style from "../_styles/navCon.module.css"
import { useState } from "react";
import UserSettingMenu from "./UserSettingMenu";
import GlobalSettingMenu from "./GlobalSettingMenu";
import logo from "../../../assets/images/logo.png"

interface NavConProps {
  setSelectCategory: (category: string) => void;
}

export default function NavCon({ setSelectCategory }: NavConProps) {
  const [openUserSetting, setOpenUserSetting] = useState(false);
  const [openGlobalSetting, setOpenGlobalSetting] = useState(false);

  const handleUserSettingMenu = () => {
    setOpenUserSetting(!openUserSetting)
  }

  const handleGlobalSettingMenu = () => {
    setOpenGlobalSetting(!openGlobalSetting)
  }

  const closeGlobalSettingMenu = () => {
    setOpenGlobalSetting(false)

  };

  return (
    <>
      <div className={style.navCon}>
        <h1 className={style.logo}><img src={logo} alt="" /></h1>
        <div className={style.categoryCon}>
          <p onClick={() => setSelectCategory('숙소')}>숙소</p>
          <p onClick={() => setSelectCategory('체험')}>체험</p>
        </div>
        <div className={style.etcHeaderNavCon}>
          <Link to='https://www.airbnb.co.kr/host/homes'><p>당신의 공간을 에어비앤비하세요</p></Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor", cursor: "pointer", position: "relative" }}
            onClick={handleGlobalSettingMenu}
          >
            <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
          </svg>
          <button onClick={handleUserSettingMenu}>
            <i className="fa-solid fa-bars"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{ display: "block", height: "28px", width: "28px", fill: "#6a6a6a" }}
            >
              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
            </svg>
          </button>
        </div>
      </div>
      {openUserSetting && (
        <UserSettingMenu />
      )}
      {openGlobalSetting && (
        <GlobalSettingMenu closeMenu={closeGlobalSettingMenu} />
      )}
    </>
  );
};
