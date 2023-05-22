import { useEffect } from "react";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [router]);
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <span> Извините, что то пошло не так.</span>
      <span>
        Вас автоматически перекинет на главную через <span>3 сек...</span>
      </span>
    </div>
  );
};

export default ErrorPage;
