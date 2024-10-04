import { useState } from "react";
import styles from "./Calender.module.css";

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export default function Calender({ monthOffset }: { monthOffset?: number }) {
  const date = new Date();
  if (monthOffset) {
    date.setDate(1);
    date.setMonth(date.getMonth() + (monthOffset ?? 0));
  }
  console.log("date", date);

  const [year] = useState<number>(date.getFullYear());
  const [month] = useState<number>(date.getMonth() + 1);
  const startDay = date.getDay() - (date.getDate() % 7) + 1;

  const dates: (number | null)[] = Array.from(
    { length: days[month - 1] },
    (_, i) => i + 1
  ); // 1부터 31까지의 배열 생성
  for (let i = 0; i < startDay; i++) {
    dates.unshift(null);
  }

  return (
    <div className={styles.calender}>
      <p>
        {year}년 {month}월
      </p>
      <div className={styles.days}>
        <li className={styles.dayNames}>일</li>
        <li className={styles.dayNames}>월</li>
        <li className={styles.dayNames}>화</li>
        <li className={styles.dayNames}>수</li>
        <li className={styles.dayNames}>목</li>
        <li className={styles.dayNames}>금</li>
        <li className={styles.dayNames}>토</li>
        {dates.map((v) =>
          !v || v >= date.getDate() ? (
            <li className={styles.able}>{v}</li>
          ) : (
            <li className={styles.disabled}>{v}</li>
          )
        )}
      </div>
    </div>
  );
}
