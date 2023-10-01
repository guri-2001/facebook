import React from 'react';
import { MdSlowMotionVideo } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/Ai";
import { FaUsers } from "react-icons/Fa";
import { RiGamepadLine } from "react-icons/Ri";
import Link from 'next/link';
import styles from '.././styles/Header.module.css'



const HeaderIcons = () => {
    return (
    <>
        <div className={styles.icon_div} id='center_icon_div'>
            <Link href="/"className={styles.center_icon} ><AiOutlineHome /></Link>

            <Link href="/Watch" title="" className={styles.center_icon} ><MdSlowMotionVideo /></Link>

            <Link href="/" title="" className={styles.center_icon} ><LuStore /></Link>

            <Link href="/" title="" className={styles.center_icon} ><FaUsers /></Link>
            
            <Link href="/" title="" className={styles.center_icon} ><RiGamepadLine /></Link>
        </div>

       

    </>


    )
}

export default HeaderIcons;