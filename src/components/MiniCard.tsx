interface MiniCardPercentageProps {
  percentage: number;
}

interface MiniCardProps {
  title: string;
  count: number;
  percentage?: number;
  isPercentage?: boolean;
}

function MiniCardPercentage({ percentage }: MiniCardPercentageProps) {
  return (
    <div
      className={`w-[50px] h-[20px] md:w-[60px] md:h-[24px] rounded-[10px] flex items-center justify-center 
      ${percentage > 0 ? "bg-[#DDE1E6]" : "bg-[#697077] text-white"}`}
    >
      <span className="text-[12px] md:text-[14px]">{percentage}%</span>
    </div>
  );
}

export default function MiniCard({
  title,
  count,
  percentage,
  isPercentage,
}: MiniCardProps) {
  return (
    <>
      <div className="w-[266px] h-[80px] bg-white rounded-[10px] shadow-md p-4">
        <div className="flex flex-col h-full justify-center gap-0">
          {/* 제목 */}
          <div className="text-[12px] md:text-[16px] text-[#697077] font-bold">
            {title}
          </div>
          <div className="flex items-center justify-between">
            {/* 숫자 */}
            <span className="text-[16px] md:text-[20px] text-black font-[700]">
              {count} {isPercentage && "%"}
            </span>
            {percentage !== undefined && (
              <MiniCardPercentage percentage={percentage} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
