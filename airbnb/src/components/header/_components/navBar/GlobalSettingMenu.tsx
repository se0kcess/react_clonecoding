import { useState } from 'react';
import style from '../../_styles/globalSettingMenu.module.css';
import LanguageAndRegionCon from './LanguageAndRegionCon';
import CurrencySettingMenu from './CurrencySettingMenu';

interface GlobalSettingMenuProps {
  closeMenu: () => void;
}

export default function GlobalSettingMenu({
  closeMenu,
}: GlobalSettingMenuProps) {
  const [tabMenu, setTabMenu] = useState('언어와 지역');

  return (
    <div className={style.overlay}>
      <div className={style.GlobalSettingMenu}>
        <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        <div className={style.globalSettingTabMenuCon}>
          <div className={style.globalSettingMenu}>
            <p
              onClick={() => setTabMenu('언어와 지역')}
              className={tabMenu === '언어와 지역' ? style.on : ''}
            >
              언어와 지역
            </p>
            <p
              onClick={() => setTabMenu('통화')}
              className={tabMenu === '통화' ? style.on : ''}
            >
              통화
            </p>
          </div>
          {tabMenu === '언어와 지역' ? (
            <LanguageAndRegionCon />
          ) : (
            <CurrencySettingMenu />
          )}
        </div>
      </div>
    </div>
  );
}
