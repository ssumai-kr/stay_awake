import { useMemo } from "react";

const userData = [
  { ALL: 4800, Connect_Camera: 2400, Connect_Watch: 2400 },
  { ALL: 3608, Connect_Camera: 1398, Connect_Watch: 2210 },
  { ALL: 12090, Connect_Camera: 9800, Connect_Watch: 2290 },
  { ALL: 5908, Connect_Camera: 3908, Connect_Watch: 2000 },
  { ALL: 6981, Connect_Camera: 4800, Connect_Watch: 2181 },
  { ALL: 6300, Connect_Camera: 3800, Connect_Watch: 2500 },
  { ALL: 6400, Connect_Camera: 4300, Connect_Watch: 2100 },
];

export function useUserDataWithDates() {
  // ✅ 한 번만 계산, 리렌더링시 재생성 안됨
  return useMemo(() => {
    const today = new Date();
    return userData.map((item, index, arr) => {
      const daysDiff = arr.length - 1 - index;
      const date = new Date(today);
      date.setDate(today.getDate() - daysDiff);
      return {
        ...item,
        name: date.toISOString().split("T")[0],
      };
    });
  }, []);
}
