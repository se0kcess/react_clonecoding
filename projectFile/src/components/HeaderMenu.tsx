import styles from "../style/HeaderMenu.module.css";

function HeaderMenu() {
  return (
    <div className={styles.menuWrapper}>
      <div className={styles.create}>
        <p>당신의 공간을 에어비앤비 하세요</p>
      </div>
      <div className={styles.language}>
        <img src="../../public/header_globe.png"></img>
      </div>
      <button className={styles.mypage}>
        <div>
          <img src="../../public/header_menu.png"></img>
        </div>
        <div>
          <img src="../../public/header_profile.png"></img>
        </div>
      </button>
    </div>
  );
}

export default HeaderMenu;
