
import React from 'react';
import style from '.././styles/FeedContact.module.css';
import { BiVideoPlus } from "react-icons/Bi";
import { FiSearch } from "react-icons/Fi";
import { BsThreeDots } from "react-icons/Bs";
import FakeContactdata from '../components/FakeContact';
// import ProfileDiv from './ProfileDiv';

// import Image from 'next/image';

const FeedContact = () => {
    // "use client"
    // const Chance = require("chance");
    // const alldata = Chance();
    
    return (
        <>
            <div className={style.outer_div} >
                <div className={style.contact_heading}>
                    <h3 className={style.main_heading}>Contacts</h3>
                <div style={{fontSize:"20px",color:"rgb(105, 104, 104)",display:'flex',gap:"12px",marginRight:"10px",cursor:"pointer",marginLeft:"200px"}}>
                    <BiVideoPlus />
                    <FiSearch />
                    <BsThreeDots />
                </div>
                </div>
                <div style={{marginTop:"10px"}}>
                    <FakeContactdata />
                </div>

            </div>
            {/* <ProfileDiv /> */}

        </>
    )
}

export default FeedContact