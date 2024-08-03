import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
    return () => {
      removeEventListener("offline");
      removeEventListener("online");
    };
  }, []);
  return online;
};
export default useInternetStatus;
