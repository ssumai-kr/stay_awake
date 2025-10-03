import React, { useMemo } from "react";
import UserDataChart from "./UserDataChart";

export default function UserGraph() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  return (
    <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
      <div className="flex gap-4 items-center mb-[10px]">
        <h3 className="text-[18px] font-bold text-black mb-[15px]">
          실시간 사용자 활동
        </h3>
        <div className="text-[14px] text-gray-500 mb-[15px]">{today}</div>
      </div>
      {/* ✅ 더 이상 훅을 props로 넘기지 않음 */}
      <UserDataChart />
    </div>
  );
}
