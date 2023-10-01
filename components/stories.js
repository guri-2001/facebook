"use client"
import React from 'react'
import Image from 'next/image';
import { FaBookOpen } from "react-icons/Fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import style from '.././styles/FeedCenter.module.css';
import { useEffect, useState } from "react"
import { generateFakeUsers } from ".././utils/generateFakeUsers"
import { useSession }  from 'next-auth/react'


const Stories = () => {
  const { data: session } = useSession();

    
    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = generateFakeUsers(20)
        setData(loadData)
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
        },
        };
    
    return (
    <div className={style.outer_div}>
                <div className={style.stories_div}>
                    <div className={style.stories_icon_div}>
                        <FaBookOpen style={{fontSize:"20px",color:"gray"}} />
                        <h4 style={{marginLeft:"5px",fontWeight:"500",color:"gray"}}>Stories</h4>
                    </div>
                    <div className={style.stories_icon_div}>
                        <MdOutlineVideoLibrary style={{fontSize:"20px",color:"gray"}} />
                        <h4 style={{marginLeft:"5px",fontWeight:"500",color:"gray"}}>Reels</h4>
                    </div>
                </div>

                {/* Stories */}
                {/* <Profile /> */}

                <div style={{display:"flex",padding: "10px 20px",overflow:"hidden",overflowX:"scroll"}}>
                    <Image alt='' src="/1.png" height={190} width={100} style={{margin:"10px 5px",borderRadius:"10px",cursor:"pointer"}}/>
                    {/* <Image alt='' src={session. user.image} height={190} width={100} style={{margin:"10px 5px",borderRadius:"10px",cursor:"pointer"}}/> */}
                    {
                        data.map((e, index)=>{
                            return(
                                <>
                                    <div key={index} style={{padding:"0px 5px",marginTop:"-30px",cursor:"pointer"}}>
                                        <div>
                                            <Image alt='' src={e.avatar} height={35} width={35} style={{borderRadius:"50%",border:"3px solid blue",padding:"1px",position:"relative",top:"50px",left:"10px"}}  />
                                        </div>
                                        
                                        <Image alt='' src={e.avatar} height={190} width={100} style={{borderRadius:"10px"}} />

                                        <p style={{fontFamily:"arial",position:"relative",top:"-30px",left:"5px",color:"white",fontWeight:"600 "}}>{e.firstName}</p>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
    )
}

export default Stories