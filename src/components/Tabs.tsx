import DashImg from "@/images/dashboardImage.svg";
import DashBlackImg from "@/images/dashboardImage-black.svg";
import HeartImg from "@/images/heartImage.svg";
import ErrorImg from "@/images/errorImage.svg";
import ErrorWhiteImg from "@/images/error-white.svg";
import HeartWhiteImg from "@/images/heart-white.svg";

export function DashBoardTab({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 cursor-pointer h-[50px]' ${isSelected ? "bg-[#FF4F4F] text-white rounded-[10px] px-2 md:px-4" : "text-[#000] px-2 md:px-4"} `}
      onClick={onClick}
    >
      <img src={isSelected ? DashImg : DashBlackImg} alt="DashBoard" />
      <span className="text-[10px] md:text-[14px]">대시보드</span>
    </div>
  );
}
export function HeartTab({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 cursor-pointer h-[50px] px-4' ${isSelected ? "bg-[#FF4F4F] text-white rounded-[10px] px-2 md:px-4" : "text-[#000] px-2 md:px-4"} `}
      onClick={onClick}
    >
      <img src={isSelected ? HeartWhiteImg : HeartImg} alt="Heart" />
      <span className="text-[10px] md:text-[14px]">생체 데이터</span>
    </div>
  );
}
export function ErrorTab({
  isSelected,
  onClick,
}: {
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 cursor-pointer h-[50px] px-4' ${isSelected ? "bg-[#FF4F4F] text-white rounded-[10px] px-2 md:px-4" : "text-[#000] px-2 md:px-4"} `}
      onClick={onClick}
    >
      <img src={isSelected ? ErrorWhiteImg : ErrorImg} alt="Error" />
      <span className="text-[10px] md:text-[14px]">에러 모니터링</span>
    </div>
  );
}
