import { useEffect, useState } from "react";
import Router from "next/router";

interface ILoaderProps {
  children: React.ReactNode;
}

const Loader: React.FC<ILoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const router = Router;
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [router.events]);
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-white">
          <div className="grid gap-2">
            <div className="flex items-center justify-center ">
              <div className="h-40 w-40 animate-spin rounded-full border-b-4 border-t-4 border-green-900"></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
