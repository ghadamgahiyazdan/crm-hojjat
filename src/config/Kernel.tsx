"use client"
import Loading from "@/app/loading";
import { userInfo } from "@/service";
import useStore from "@/store";
import { Children } from "@/types";
import React, { useEffect, useState } from "react";

const Kernel: React.FC<Children> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true); // Renamed to isLoading and fixed initial state
    const { set_vaildate,refresher } = useStore(); // Fixed typo in set_vaildate
    
    useEffect(() => {
        userInfo()
            .then(() => {
                set_vaildate(true);
                setIsLoading(false);
            })
            .catch(() => {
                set_vaildate(false);
                setIsLoading(false);
            });
    }, [refresher]); // Added dependency

    return (
        <>
            {isLoading ? <Loading /> : children}
        </>
    );
};

export default Kernel;