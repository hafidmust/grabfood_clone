import {ShoppingBagIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";
import logo from "./logo-grabfood-white.svg"
import logoGreen from "./logo-grabfood.svg"
import './navigation.css'

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(logo);

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground)
    })

    const changeLogo = () => {
        if (window.scrollY >= 60) {
            setNavbarLogo(logoGreen)
        } else {
            setNavbarLogo(logo)
        }
    }
    useEffect(() => {
        changeLogo()
        window.addEventListener("scroll", changeLogo)
    })
    return (
        <div className={"fixed w-full top-0 "}>
            <div className={navbar ? "bg-white border-b-2" : ""}>
                <div className={""}>
                    <div className={"container mx-auto p-5"}>
                        <div className={"flex justify-between"}>
                            <div>
                                <img src={navbarLogo} className={"w-32"}
                                     alt={"Logo"}/>
                            </div>
                            <div className={"flex"}>
                                <button className={"bg-white border rounded-lg p-3 mr-2 text-gray-500 invisible md:visible"}>
                                    <ShoppingBagIcon height={"16"} width={"16"}/>
                                </button>
                                <button className={"bg-white border rounded-lg p-3 text-gray-500 font-semibold text-xs"}>
                                    Login/Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>

    )
}

export default Navigation;