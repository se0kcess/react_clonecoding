import Header from "./layout/Header.tsx";
import "./style/myreset.css";

function App() {
  const fetchedCityList = [
    "서울",
    "대전",
    "대구",
    "부산",
    "속초",
    "강릉",
    "제주",
    "여수",
    "인천",
    "수원",
    "울산",
    "춘천",
    "목포",
  ];

  return (
    <>
      <Header fetchedCityList={fetchedCityList}></Header>
    </>
  );
}

export default App;
