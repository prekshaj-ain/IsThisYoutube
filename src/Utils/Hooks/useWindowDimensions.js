import { useEffect, useState } from "react";

const getWindowDimensions = ()=>{
    const {innerWidth:width,innerHeight:height} = window;
    return {
        width,height
    };
}
const useWindowDimensions = ()=>{
    const [windowDimension,setWindowDimension] = useState(getWindowDimensions());
    useEffect(()=>{
        function handleResize(){
            setWindowDimension(getWindowDimensions());
        }
        window.addEventListener('resize',handleResize);
        return ()=> window.removeEventListener('resize',handleResize);
    },[])
    return windowDimension;

}
export default useWindowDimensions;