import { useState, useEffect, useMemo } from "react";
import MiniCard from "@/components/MiniCard";
import SystemCard from "@/components/SystemCard";
import UserGraph from "@/components/UserGraph";

export default function DashBoard() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now
        .toLocaleString("sv-SE", { timeZone: "Asia/Seoul" })
        .replace("T", " ");
      setCurrentTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col mt-[40px] items-center">
        <div className="text-[16px] font-mono flex w-full max-w-[1136px]">
          {currentTime}
        </div>
        <div className="flex gap-[24px] mt-[20px] justify-center w-full">
          <MiniCard title="전체 사용자" count={1500} percentage={10} />
          <MiniCard title="현재 접속자" count={50} />
          <MiniCard title="오늘 총 에러" count={3000} percentage={-5} />
          <MiniCard title="API 성공률" count={200} isPercentage />
        </div>
      </div>
      <div className="flex flex-col gap-[24px] items-center justify-center mt-[24px] mb-[40px]">
        <SystemCard
          faceRecognitionRate={95}
          heartRateMeasurementRate={60}
          alarmOperationRate={15}
        />
        <UserGraph /> {/* ✅ React.memo 적용으로 리렌더링 방지 */}
      </div>
    </>
  );
}
