import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [OnlineStatus,setOnlineStatus]=useState([]);
    //check if online
  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup when the component using this hook unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
         
    },[]);
    //boolen value
    return OnlineStatus;
}
export default useOnlineStatus;