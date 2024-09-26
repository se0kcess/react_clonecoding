import style from "../_styles/destinationSearchMenu.module.css"

const regions = [
  {
    img: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320",
    name: "유연한 검색"
  },
  {
    img: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    name: "유럽"
  },
  {
    img: "https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320",
    name: "일본"
  },
  {
    img: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320",
    name: "동남아시아"
  }
]

const koreaRegions = [
  { name: "서울" },
  { name: "부산" },
  { name: "속초" },
  { name: "강릉" },
  { name: "전주" },
  { name: "대구" },
  { name: "경주" },
  { name: "여수" },
  { name: "서귀포" },
  { name: "대전" },
  { name: "제주도" },
  { name: "인천" },
]

const countries = {
  allCountries: [
    { name: "오사카" },
    { name: "도쿄" },
    { name: "후쿠오카" },
    { name: "방콕" },
    { name: "런던" },
    { name: "치앙마이" },
    { name: "타이베이" },
    { name: "시드니" },
    { name: "삿포로" },
    { name: "그린델발트" },
    { name: "바르셀로나" },
    { name: "인터라켄" },
  ],
  eastAsia: [
    { name: "오사카" },
    { name: "도쿄" },
    { name: "후쿠오카" },
    { name: "타이베이" },
    { name: "삿포로" },
    { name: "오키나와" },
    { name: "교토" },
    { name: "나고야" },
    { name: "벳푸" },
    { name: "유후" },
    { name: "히로시마" },
    { name: "나하" },
  ],
  eastSouthAsia: [
    { name: "방콕" },
    { name: "치앙마이" },
    { name: "하노이" },
    { name: "파타야" },
    { name: "냐짱" },
    { name: "세부" },
    { name: "호이안" },
    { name: "달랏" },
    { name: "다낭" },
    { name: "마닐라" },
    { name: "엔젤레스" },
    { name: "코타키나발루" },
  ],
  europe: [
    { name: "런던" },
    { name: "그린델발트" },
    { name: "바르셀로나" },
    { name: "인터라켄" },
    { name: "프라하" },
    { name: "세비야" },
    { name: "파리" },
    { name: "부다페스트" },
    { name: "마드리드" },
    { name: "리스본" },
    { name: "빈" },
    { name: "니스" },
  ],
  america: [
    { name: "로스엔젤레스" },
    { name: "호놀룰루" },
    { name: "뉴욕" },
    { name: "벤쿠버" },
    { name: "라스베이거스" },
    { name: "토론토" },
    { name: "카일루아코나" },
    { name: "조슈아 트리" },
    { name: "센프란시스코" },
    { name: "샌디에이고" },
    { name: "힐로" },
    { name: "보스턴" },
  ]
};

export default function DestinationSearchMenu() {
  return (
    <div className={style.DestinationSearchMenu}>
      <section className={style.searchToRegion}>
        <h2>지역으로 검색하기</h2>
        <ul className={style.regionCards}>
          {regions.map((region) => (
            <li className={style.regionCard}>
              <div>
                <img src={region.img} alt="지역이미지" />
              </div>
              <p>{region.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.koreaRegion}>
        <h2>한국</h2>
        <ul className={style.koreaRegionCards}>
          {koreaRegions.map((region) => (
            <li className={style.koreaRegionCard}>
              <button>{region.name}</button>
            </li>
          ))}
        </ul>
      </section>
      <section className={style.allCountriesRegion}>
        <h2 hidden>전세계 탭메뉴</h2>
        <ul>
          {countries.allCountries.map((country, index) => (
            <li key={index}>
              <button>{country.name}</button>
            </li>
          ))}
        </ul>
      </section>
    </div >
  );
};
