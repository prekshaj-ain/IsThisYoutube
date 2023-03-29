import React, { useEffect, useRef } from 'react'

const DetectClickOutside = (props) => {
    const {onClickOutside,children} = props;
    const ref = useRef(null);
    const handleClickEvent = (e)=>{
        if(ref.current && !ref.current.contains(e.target)){
            onClickOutside && onClickOutside();
        }
    }
    useEffect(()=>{
        document.addEventListener("click",handleClickEvent,true)
        return ()=>document.removeEventListener("click",handleClickEvent,true)
    },[handleClickEvent])
    if(!children) return null;
  return (
    <div ref={ref}>{children}</div>
  )
}

export default DetectClickOutside