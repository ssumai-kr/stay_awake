import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashBoardTab, ErrorTab, HeartTab } from "../components/Tabs";

export default function Header() {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleTabClick = (tab: string, path: string) => {
    setSelectedTab(tab);
    navigate(path);
  };

  return (
    <header className="w-full h-[150px] border-b-[1px] border-[#7c7676] bg-[#f8f8f8] sticky top-0 z-10">
      <div className="flex flex-col w-full">
        <div className="flex gap-[10px] items-center pl-[20px] pt-[20px] w-full">
          <div className="text-[20px] font-bold cursor-pointer">
            <span className="text-[#FF4F4F]">S</span>TAY A
            <span className="text-[#FF4F4F]">WAKE</span>
          </div>
          <span className="text-[10px] md:text-[14px] font-[400] mt-[10px]">
            관리자 대시보드
          </span>
        </div>
      </div>
      <div className="flex gap-[14px] pl-[20px] pt-[20px]">
        <DashBoardTab
          isSelected={selectedTab === "dashboard"}
          onClick={() => handleTabClick("dashboard", "/dashboard")}
        />
        <HeartTab
          isSelected={selectedTab === "datachart"}
          onClick={() => handleTabClick("datachart", "/datachart")}
        />
        <ErrorTab
          isSelected={selectedTab === "errorMonitoring"}
          onClick={() => handleTabClick("errorMonitoring", "/errorMonitoring")}
        />
      </div>
    </header>
  );
}
