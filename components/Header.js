
import React from 'react'
import Image from 'next/image'
import styles from '.././styles/Header.module.css'
import { HiSearch } from "react-icons/Hi";
import HeaderIcons from '../components/HeaderIcons';
import { FaBars } from 'react-icons/Fa';
import { BsMessenger } from 'react-icons/Bs';
import { IoMdNotifications } from 'react-icons/Io';
import { MdSlowMotionVideo } from "react-icons/md";
import { LuStore } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/Ai";
import { FaUsers } from "react-icons/Fa";
import { RiGamepadLine } from "react-icons/Ri";
import Link from 'next/link';
import { signOut } from 'next-auth/react';


const Header = () => {

    function openProfile() {
        const profile = document.getElementById('profile');

        console.log(profile);

        // if (profile.style.display == "none") {
        //     profile.style.display = "block"
        // } else {
        //     profile.style.display = "none";
        // }
    }

    return (
        <>
            <div className={styles.main} style={{position:"sticky", top:"0"}}>
                <div className='main_inner' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                    {/* Left Part */}

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <Image src="/facebook.png" alt='facebook-logo' height={45} width={45} id='logo_image' />
                        </div>
                        <span className={styles.icon}><HiSearch /></span>
                        <input type='text' placeholder='Search here...' className={styles.input} id='search' onClick={() => {
                            const search = document.getElementById('search');
                            if (search.style.width == 0) {
                                search.style.width = '200px'
                            } else {
                                search.style.width = 0
                            }
                        }} />
                    </div>


                    {/* Center Part */}
                    <HeaderIcons />

                    {/* Right Part */}
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>

                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <FaBars className={styles.menu_bars} />

                            <div className={styles.left_icon_back}>
                                <FaBars className={styles.left_icon} />
                            </div>

                            <div className={styles.left_icon_back}>
                                <BsMessenger className={styles.left_icon} />
                            </div>

                            <div className={styles.left_icon_back}>
                                <IoMdNotifications className={styles.left_icon} />
                            </div>
                            <div>
                                <button onClick={() => signOut()}>Log Out</button>
                            </div>
                            {/* <button onClick={openProfile}>Profile</button> */}
                        </div>
                        {/* <ProfileDiv /> */}
                        
                    </div>
                    <div>
                    </div>


                </div>
            </div>

            <div className={styles.mobile_icon_div} id='center_icon_div'>
                <Link href="/"><AiOutlineHome className={styles.mobile_icon} /></Link>

                <Link href="/" title="" ><MdSlowMotionVideo className={styles.mobile_icon} /></Link>

                <Link href="/" title="" ><LuStore className={styles.mobile_icon} /></Link>

                <Link href="/" title="" ><FaUsers className={styles.mobile_icon} /></Link>

                <Link href="/" title="" ><RiGamepadLine className={styles.mobile_icon} /></Link>

            </div>
        </>
    )
}

export default Header;
