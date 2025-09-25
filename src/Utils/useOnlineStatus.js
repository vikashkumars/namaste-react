import { useState, useEffect } from "react";
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false); 
        //window.addEventListener("online", handleOnline);
       // window.addEventListener("offline", handleOffline);  
       // more simpified way of writing the above code
       window.addEventListener("offline",()=>{
        setIsOnline(false);
       });
       window.addEventListener("online",()=>{
        setIsOnline(true);
       });
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);
    return isOnline;
};
export default useOnlineStatus; 
