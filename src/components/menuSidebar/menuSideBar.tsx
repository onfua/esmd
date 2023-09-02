"use client"

import Link from "next/link"
import Image from "next/image"
import { Sidebar } from "primereact/sidebar"
import { useState, useEffect } from "react"
import layoutStyle from './style.module.css'
import burgerIcon from "../../assets/images/icons/burger.png"
import searchIcon from "../../assets/images/icons/search.svg"
import userIcon from "../../assets/images/icons/add-user.svg"

const LeftLink = (props : any) => {
    return (
        <>
            <Link href="/" className={layoutStyle.navlink} onClick={()=>props.hide()}>Accueil</Link>
            <Link href="/about" className={layoutStyle.navlink} onClick={()=>props.hide()}>A propos</Link>
            <Link href="/products" className={layoutStyle.navlink} onClick={()=>props.hide()}>Nos produits</Link>
        </>
    )
} 

const RightLink = (props : any) => {
    return (<>
        <Link href="/contact" className={layoutStyle.navlink} onClick={()=>props.hide()}>Contact</Link>
        <Link href="/search" className={layoutStyle.navlink} onClick={()=>props.hide()}><Image src={searchIcon} alt="search icon"></Image></Link>

    </>)
}

export default function SideBarClient(){
    const [menuVisible,setMenuVisible] = useState<boolean>(false)

    //on window size changed
    useEffect(() => {
        window.addEventListener('resize',() => {
            if (window.innerWidth >= 800) setMenuVisible(false)
        })
    })

    return (
        <>
            <button className={layoutStyle.burgerButton} onClick={()=>setMenuVisible(true)}><Image src={burgerIcon} alt="burger icon"></Image></button>
            <Sidebar visible={menuVisible} fullScreen onHide={()=>setMenuVisible(false)}>
                <div className={layoutStyle.sidebar}>
                   <LeftLink hide={()=>setMenuVisible(false)}/>
                   <RightLink hide={()=>setMenuVisible(false)}/>
                </div>
                
            </Sidebar>
        </>
    )
}