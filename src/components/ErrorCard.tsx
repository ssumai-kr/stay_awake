export default function ErrorCard() {
  return (
    <div className="flex flex-col mt-[40px] items-center">
      <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="text-red-600">에러 내용</p>
      </div>
    </div>
  );
}
