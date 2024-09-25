import { Link } from "react-router-dom";
import style from "../_styles/userSettingMenu.module.css"

export default function UserSettingMenu() {
  return (
    <div className={style.UserSettingMenu}>
      <div className={style.signCon}>
        <p>회원 가입</p>
        <p>로그인</p>
      </div>
      <div className={style.etcSettingCon}>
        <Link to="https://www.airbnb.co.kr/host/homes">당신의 공간을 에어비앤비하세요</Link>
        <Link to="https://www.airbnb.co.kr/host/experiences?from_nav=1">체험 호스팅하기</Link>
        <Link to="https://www.airbnb.co.kr/help">도움말 센터</Link>
      </div>
    </div>
  );
};
