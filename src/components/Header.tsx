import { useState } from "react";
import { DashBoardTab, ErrorTab, HeartTab } from "./Tabs";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <header className="w-full h-[150px] border-b-[1px] border-[#E3E3E3]">
        <div className="flex flex-col w-full">
          <div className="flex gap-[10px] items-center pl-[20px] pt-[20px]">
            <div className="text-[24px] font-bold cursor-pointer">
              <span className="text-[#FF4F4F]">S</span>TAY A
              <span className="text-[#FF4F4F]">WAKE</span>
            </div>
            <span className="text-[16px] font-[400]"> 관리자 대시보드 </span>
          </div>
        </div>
        <div className="flex gap-[30px] pl-[20px] pt-[20px]">
          <DashBoardTab
            isSelected={selectedTab === "dashboard"}
            onClick={() => handleTabClick("dashboard")}
          />
          <HeartTab
            isSelected={selectedTab === "heart"}
            onClick={() => handleTabClick("heart")}
          />
          <ErrorTab
            isSelected={selectedTab === "error"}
            onClick={() => handleTabClick("error")}
          />
        </div>
      </header>
    </>
  );
}
