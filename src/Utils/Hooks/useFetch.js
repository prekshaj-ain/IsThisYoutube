import { useEffect, useState } from "react";

const useFetch = (url)=>{
    const [Data,setData] = useState(null);
    useEffect(()=>{
        const getData = async ()=>{
            const data = await fetch(url);
            const json = await data.json();
            setData(json.items);
        }
        getData();
    },[url])
    return Data;

}
export default useFetch;