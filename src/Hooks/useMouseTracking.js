import {useEffect} from "react";
import useMouseStore from "../Store/useMouseStore";

const useMouseTracking = ()=>{
    const setPosition = useMouseStore(state => state.setPosition);

    useEffect(()=>{
        const handleMouseMove = (e) => {
            setPosition(e.clientX, e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    },[setPosition]);
}

export default useMouseTracking;