import {useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/solid";

const Accordion = ({title, content}) => {
    const [active, setActive] = useState(false)

    return(
        <div className={"col"}>
            <div className={"flex justify-between"} onClick={()=>setActive(!active)}>
                <div className={""}><h5 className={"font-semibold"}>{title}</h5></div>
                <ChevronDownIcon width={"24"}/>
            </div>
            {active && <p className={"text-sm"}>{content}</p> }
        </div>
    )

}

export default Accordion