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
      className={`w-[60px] h-[24px] rounded-[10px] flex items-center  justify-center ${percentage > 0 ? "bg-[#DDE1E6]" : "bg-[#697077] text-white"}`}
    >
      {percentage}%
    </div>
  );
}

export default function MiniCard({ title, count, percentage, isPercentage }: MiniCardProps) {
  return (
    <>
      <div className="w-[266px] h-[80px] bg-white rounded-[10px] shadow-md p-4">
        <div className="flex flex-col h-full justify-center gap-0">
          <div className="text-[16px] text-[#697077] font-bold">{title}</div>
          <div className="flex items-center justify-between">
            <span className="text-[24px] text-black font-[700]">{count} {isPercentage && "%"}</span>
            {percentage !== undefined && (
              <MiniCardPercentage percentage={percentage} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
