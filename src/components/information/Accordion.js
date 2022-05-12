import {useEffect, useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/solid";

const Accordion = ({title, content}) => {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false)

    const changeWindow = () =>{
        if (window.innerWidth >= 768){
            setActive(true)
            setShow(false)
        }else{
            setActive(false)
            setShow(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("resize", changeWindow)
    })
    const handleOnClick = () =>{
        if (!window.matchMedia("(max-width: 768px").matches){
            return;
        }
        setActive(!active)
    }

    return(
        <div className={"col"}>
            <div className={"flex justify-between"} onClick={()=>handleOnClick()}>
                <div className={""}><h5 className={"font-semibold"}>{title}</h5></div>
                {show ? <ChevronDownIcon width={"24"}/> : ""}
            </div>
            {active && <p className={"text-sm"} dangerouslySetInnerHTML={{__html: content }}></p> }
        </div>
    )

}

export default Accordion