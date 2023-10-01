import React from 'react'
import style from '.././styles/Feed.module.css';

import { MdGroup } from "react-icons/md";
import { FaUsers } from "react-icons/Fa";
import { LuStore, LuCalendarClock } from "react-icons/lu";
import { MdSlowMotionVideo } from "react-icons/md";
import { FcClock } from "react-icons/Fc";
import { BsFillBookmarksFill, BsMessenger } from "react-icons/Bs";
import { AiFillFlag } from "react-icons/Ai";
import { RiGamepadLine } from "react-icons/Ri";
import { TbPlant } from "react-icons/Tb";
import Link from 'next/link';


const FeedLeftPart = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", rowGap: "5px", marginTop: "10px" }} className='left_main_div'>
            <div className={style.left_icon_div}>
                <MdGroup className={style.left_icon} />
                <p className={style.left_icon_para}>friends</p>
            </div>
            <div className={style.left_icon_div}>
                <LuCalendarClock className={style.left_icon} />
                <p className={style.left_icon_para}>feeds(most recent)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>
            <div className={style.left_icon_div}>
                <FaUsers className={style.left_icon} />
                <p className={style.left_icon_para}>groups</p>
            </div>
            <div className={style.left_icon_div}>
                <LuStore className={style.left_icon} />
                <p className={style.left_icon_para}>marketplace</p>
            </div>
            <Link href='/Watch' style={{ textDecoration: "none", color: "black" }}>
                <div className={style.left_icon_div}>
                    <MdSlowMotionVideo className={style.left_icon} />
                    <p className={style.left_icon_para}>watch</p>
                </div>
            </Link>
            <div className={style.left_icon_div}>
                <FcClock className={style.left_icon} />
                <p className={style.left_icon_para}>memories</p>
            </div>
            <div className={style.left_icon_div}>
                <BsFillBookmarksFill className={style.left_icon} style={{ color: "rgb(217, 120, 253)" }} />
                <p className={style.left_icon_para} >saved</p>
            </div>
            <div className={style.left_icon_div}>
                <AiFillFlag className={style.left_icon} style={{ color: "rgb(246, 114, 13)" }} />
                <p className={style.left_icon_para}>pages</p>
            </div>
            <div className={style.left_icon_div}>
                <BsMessenger className={style.left_icon} style={{ color: "rgb(255, 61, 255)" }} />
                <p className={style.left_icon_para}>messenger</p>
            </div>
            <div className={style.left_icon_div}>
                <RiGamepadLine className={style.left_icon} />
                <p className={style.left_icon_para}>games</p>
            </div>
            <div className={style.left_icon_div}>
                <TbPlant className={style.left_icon} />
                <p className={style.left_icon_para}>climate science center</p>
            </div>
        </div>
    )
}

export default FeedLeftPart