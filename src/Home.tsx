import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  username: string;
  password: string;
};

const testAccount = {
  id: "stayawake",
  pw: "123456",
};

export default function Home() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("로그인 데이터:", data);
    navigate("/DashBoard");
    // 👉 여기에 API 요청 넣으면 됨
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center mt-[160px]"
      >
        <div className="text-[24px] font-bold cursor-pointer">
          <span className="text-[#FF4F4F]">S</span>TAY A
          <span className="text-[#FF4F4F]">WAKE</span>
        </div>

        {/* 아이디 입력 */}
        <label className="flex flex-col gap-[10px] w-full max-w-[312px]">
          아이디
          <input
            {...register("username", { required: "아이디를 입력해주세요." })}
            className="w-full h-[48px] rounded-2xl border-gray-400 border p-2 text-[12px]"
          />
          <span className="text-red-500 text-xs mt-1 min-h-[16px]">
            {errors.username?.message}
          </span>
        </label>

        {/* 비밀번호 입력 */}
        <label className="flex flex-col gap-[10px] w-full max-w-[312px]">
          비밀번호
          <input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 6,
                message: "비밀번호는 최소 6자리 이상이어야 합니다.",
              },
            })}
            className="w-full h-[48px] rounded-2xl border-gray-400 border p-2 text-[12px]"
          />
          <span className="text-red-500 text-xs mt-1 min-h-[16px]">
            {errors.password?.message}
          </span>
        </label>

        <button
          type="submit"
          className="w-[312px] h-[48px] bg-[#FF4F4F] text-white rounded-2xl mt-[20px]"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
