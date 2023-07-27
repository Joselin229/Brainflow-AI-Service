import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";

const BotAvatar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
    return(
        <Avatar className="h-8 w-8">
            <AvatarImage className="p-1" src="/l0g0.png"/>
        </Avatar>
    );
};

export default BotAvatar;