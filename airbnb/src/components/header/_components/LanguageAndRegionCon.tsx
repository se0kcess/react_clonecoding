import style from "../_styles/languageAndRegionCon.module.css"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function LanguageAndRegionCon() {
  return (
    <>
      <div className={style.translateMenu}>
        <div className={style.translateMenuWrap}>
          <div>
            <p>번역</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "19px", width: "19px", fill: "currentcolor" }}>
              <path d="M9 0a1 1 0 0 1 1 .88V6h5a1 1 0 0 1 1 .88V15a1 1 0 0 1-.88 1H7a1 1 0 0 1-1-.88V10H1a1 1 0 0 1-1-.88V1a1 1 0 0 1 .88-1H9zm1.73 7-1.4.5.24.21.13.13c.12.13.23.25.3.36l.08.1.05.07.04.08H7.31v1.3h1.2l.17.53.1.26.1.3A6.3 6.3 0 0 0 10 12.61c-.5.32-1.12.61-1.87.87l-.33.11-.35.11-.44.14.72 1.15.4-.13.4-.12c1-.35 1.83-.76 2.48-1.22.57.4 1.28.77 2.12 1.08l.37.14.38.12.41.13.72-1.15-.45-.14-.26-.08-.34-.11a9.23 9.23 0 0 1-1.94-.9 6.3 6.3 0 0 0 1.07-1.7l.13-.31.11-.33.17-.52h1.2V8.45h-3.05l-.1-.23A3.7 3.7 0 0 0 11 7.3l-.12-.15-.14-.15zm1.35 2.76-.04.13-.08.22-.1.27a4.99 4.99 0 0 1-.86 1.38 4.95 4.95 0 0 1-.74-1.13l-.12-.25-.1-.27-.08-.22-.04-.13h2.16zM9 1H1v8h5V7l.01-.17H3.83L3.43 8H2l2.26-6h1.48l1.5 4H9V1zM5 3.41 4.25 5.6h1.5L5 3.41z"></path>
            </svg>
          </div>
          <p>설명과 후기가 한국어로 자동 번역됩니다.</p>
        </div>
        <div className={style.translateMenuButton}>
          <Switch {...label} defaultChecked color="default"
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#222222',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#222222',
              },
            }}
          />
        </div>
      </div>
      <div className={style.recommendLanguageMenu}>
        <h2>추천 언어 및 지역</h2>
        <ul className={style.recommendLanguageIWrap}>
          <li className={style.languageItem}>
            <p>English</p>
            <p>United States</p>
          </li>
          <li className={style.languageItem}>
            <p>English</p>
            <p>United Kingdom</p>
          </li>
          <li className={style.languageItem}>
            <p>English</p>
            <p>Australia</p>
          </li>
        </ul>
      </div>
      <div className={style.selectLanguageMenu}>
        <h2>언어와 지역을 선택하세요</h2>
        <ul className={style.selectLanguageWrap}>
          <li className={style.languageItem}>
            <p>한국어</p>
            <p>대한민국</p>
          </li>
          <li className={style.languageItem}>
            <p>Deutsch</p>
            <p>Deutschland</p>
          </li>
          <li className={style.languageItem}>
            <p>Deutsch</p>
            <p>Deutschland</p>
          </li>
          <li className={style.languageItem}>
            <p>Deutsch</p>
            <p>Deutschland</p>
          </li>
          <li className={style.languageItem}>
            <p>Deutsch</p>
            <p>Deutschland</p>
          </li>
        </ul>
      </div>
    </>
  );
};
